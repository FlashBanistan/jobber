import datetime
import factory
import factory.django
from factory.fuzzy import FuzzyDecimal, FuzzyDate, FuzzyChoice, FuzzyText
from jobber.apps.authentication.models import User
from jobber.apps.resume.models import Resume, Profile
from jobber.apps.core.choices import ONLINE_NETWORKS, STUDY_TYPES, MASTERY_LEVELS, LANGUAGES, FLUENCY_LEVELS
from jobber.apps.core.lists.colleges import get_college
from jobber.apps.core.lists.areas_of_study import get_area_of_study
from jobber.apps.core.lists.skills import get_skill


class ProfileFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Profile'

    resume = factory.Iterator(Resume.objects.all())
    network = FuzzyChoice(ONLINE_NETWORKS, getter=lambda c: c[0])
    username = factory.Faker('user_name')
    url = factory.Faker('url')


class WorkFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Work'

    resume = factory.Iterator(Resume.objects.all())
    company = factory.Faker('company')
    position = factory.Faker('job')
    website = factory.Faker('url')
    start_date = FuzzyDate(datetime.date(2005, 1, 1), datetime.date(2010, 1, 1))
    end_date = FuzzyDate(datetime.date(2011, 1, 1), datetime.date(2016, 1, 1))
    summary = factory.Faker('paragraph')
    highlights = factory.Faker('paragraphs')


class VolunteerFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Volunteer'

    resume = factory.Iterator(Resume.objects.all())
    organization = factory.Faker('company')
    position = factory.Faker('job')
    website = factory.Faker('url')
    start_date = FuzzyDate(datetime.date(2005, 1, 1), datetime.date(2010, 1, 1))
    end_date = FuzzyDate(datetime.date(2011, 1, 1), datetime.date(2016, 1, 1))
    summary = factory.Faker('paragraph')
    highlights = factory.Faker('paragraphs')


class EducationFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Education'

    resume = factory.Iterator(Resume.objects.all())
    institution = factory.LazyAttribute(lambda u: get_college())
    area = factory.LazyAttribute(lambda u: get_area_of_study())
    study_type = FuzzyChoice(STUDY_TYPES, getter=lambda c: c[0])
    start_date = FuzzyDate(datetime.date(2005, 1, 1), datetime.date(2010, 1, 1))
    end_date = FuzzyDate(datetime.date(2011, 1, 1), datetime.date(2016, 1, 1))
    gpa = FuzzyDecimal(2.5, 4.0)
    courses = factory.Faker('words')


class AwardFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Award'

    resume = factory.Iterator(Resume.objects.all())
    title = factory.Faker('word')
    date = FuzzyDate(datetime.date(2000, 1, 1))
    awarder = factory.Faker('company')
    summary = factory.Faker('paragraph')


class PublicationFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Publication'

    resume = factory.Iterator(Resume.objects.all())
    name = factory.Faker('word')
    publisher = factory.Faker('company')
    release_date = FuzzyDate(datetime.date(2000, 1, 1))
    website = factory.Faker('url')
    summary = factory.Faker('paragraph')


class SkillFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Skill'

    resume = factory.Iterator(Resume.objects.all())
    name = factory.LazyAttribute(lambda u: get_skill())
    level = FuzzyChoice(MASTERY_LEVELS, getter=lambda c: c[0])
    keywords = factory.Faker('words')


class LanguageFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Language'

    resume = factory.Iterator(Resume.objects.all())
    language = FuzzyChoice(LANGUAGES, getter=lambda c: c[0])
    fluency = FuzzyChoice(FLUENCY_LEVELS, getter=lambda c: c[0])


class ResumeFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'resume.Resume'

    user = factory.Iterator(User.objects.all())
    title = FuzzyText(length=12)
    name = factory.LazyAttribute(lambda o: o.user.first_name + ' ' + o.user.last_name)
    label = factory.Faker('catch_phrase')
    email = factory.Faker('email')
    phone = FuzzyText(prefix='555', length=7, chars=['1', '2', '3', '4', '5', '6', '7', '8', '9'])
    website = factory.Faker('url')
    summary = factory.Faker('paragraph')
    profiles = factory.RelatedFactory(ProfileFactory, 'resume')
    work = factory.RelatedFactory(WorkFactory, 'resume')
    volunteer = factory.RelatedFactory(VolunteerFactory, 'resume')
    education = factory.RelatedFactory(EducationFactory, 'resume')
    awards = factory.RelatedFactory(AwardFactory, 'resume')
    publications = factory.RelatedFactory(PublicationFactory, 'resume')
    skills = factory.RelatedFactory(SkillFactory, 'resume')
    languages = factory.RelatedFactory(LanguageFactory, 'resume')