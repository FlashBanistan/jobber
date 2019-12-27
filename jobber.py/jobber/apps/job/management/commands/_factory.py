import pytz
import datetime
from dateutil.relativedelta import relativedelta
import factory
import factory.django
from factory.fuzzy import FuzzyDateTime, FuzzyChoice
from jobber.apps.authentication.models import User
from jobber.apps.company.models import Company
from jobber.apps.core.choices import JOB_TYPES


class JobPostingFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'job.JobPosting'

    title = factory.Faker('job')
    posted_by = factory.Iterator(User.objects.all())
    company = factory.Iterator(Company.objects.all())
    job_type = FuzzyChoice(JOB_TYPES, getter=lambda c: c[0])
    description = factory.Faker('paragraph')
    created_on = FuzzyDateTime(datetime.datetime.now(pytz.utc) - relativedelta(months=1))

    @factory.post_generation
    def locations(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of locations were passed in, use them
            for location in extracted:
                self.locations.add(location)