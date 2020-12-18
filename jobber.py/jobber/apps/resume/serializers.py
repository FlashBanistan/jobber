from rest_flex_fields import FlexFieldsModelSerializer
from .models import Resume, Profile, Work, Volunteer, Education, Award, Publication, Skill, Language


class ProfileSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Profile
        fields = [
            'id',
            'resume',
            'network',
            'username',
            'url',
        ]


class WorkSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Work
        fields = [
            'id',
            'resume',
            'company',
            'position',
            'website',
            'start_date',
            'end_date',
            'summary',
            'highlights',
        ]


class VolunteerSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Volunteer
        fields = [
            'id',
            'resume',
            'organization',
            'position',
            'website',
            'start_date',
            'end_date',
            'summary',
            'highlights',
        ]


class EducationSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Education
        fields = [
            'id',
            'resume',
            'institution',
            'area',
            'study_type',
            'start_date',
            'end_date',
            'gpa',
            'courses',
        ]


class AwardSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Award
        fields = [
            'id',
            'resume',
            'title',
            'date',
            'awarder',
            'summary',
        ]


class PublicationSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Publication
        fields = [
            'id',
            'resume',
            'name',
            'publisher',
            'release_date',
            'website',
            'summary',
        ]


class SkillSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Skill
        fields = [
            'id',
            'resume',
            'name',
            'level',
            'keywords',
        ]


class LanguageSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Language
        fields = [
            'id',
            'resume',
            'language',
            'fluency',
        ]


class ResumeReadSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Resume
        fields = [
            'id',
            'user',
            'name',
            'label',
            'email',
            'phone',
            'website',
            'summary',
            # 'address1',
            # 'address2',
            # 'address3',
            # 'address4',
            # 'locality',
            # 'region',
            # 'postcode',
            # 'country',
            'profiles',
            'work',
            'volunteer',
            'education',
            'awards',
            'publications',
            'skills',
            'languages',
        ]

    expandable_fields = {
        'profiles': ('jobber.apps.resume.ProfileSerializer', {'source': 'profiles', 'many': True}),
        'work': ('jobber.apps.resume.WorkSerializer', {'source': 'work', 'many': True}),
        'volunteer': ('jobber.apps.resume.VolunteerSerializer', {'source': 'volunteer', 'many': True}),
        'education': ('jobber.apps.resume.EducationSerializer', {'source': 'education', 'many': True}),
        'awards': ('jobber.apps.resume.AwardSerializer', {'source': 'awards', 'many': True}),
        'publications': ('jobber.apps.resume.PublicationSerializer', {'source': 'publications', 'many': True}),
        'skills': ('jobber.apps.resume.SkillSerializer', {'source': 'skills', 'many': True}),
        'languages': ('jobber.apps.resume.LanguageSerializer', {'source': 'languages', 'many': True}),
    }


class ResumeWriteSerializer(FlexFieldsModelSerializer):
    profiles = ProfileSerializer(many=True)
    work = WorkSerializer(many=True)
    volunteer = VolunteerSerializer(many=True)
    education = EducationSerializer(many=True)
    awards = AwardSerializer(many=True)
    publications = PublicationSerializer(many=True)
    skills = SkillSerializer(many=True)
    languages = LanguageSerializer(many=True)
    class Meta:
        model = Resume
        fields = [
            'id',
            'user',
            'name',
            'label',
            'email',
            'phone',
            'website',
            'summary',
            # 'address1',
            # 'address2',
            # 'address3',
            # 'address4',
            # 'locality',
            # 'region',
            # 'postcode',
            # 'country',
            'profiles',
            'work',
            'volunteer',
            'education',
            'awards',
            'publications',
            'skills',
            'languages',
        ]

    def create(self, validated_data):
        profiles = validated_data.pop('profiles', None)
        work = validated_data.pop('work', None)
        volunteer = validated_data.pop('volunteer', None)
        education = validated_data.pop('education', None)
        awards = validated_data.pop('awards', None)
        publications = validated_data.pop('publications', None)
        skills = validated_data.pop('skills', None)
        languages = validated_data.pop('languages', None)

        resume = Resume.objects.create(**validated_data)

        for profile in profiles:
            Profile.objects.create(resume=resume, **profile)
        for workObj in work:
            Work.objects.create(resume=resume, **workObj)
        for volunteerObj in volunteer:
            Volunteer.objects.create(resume=resume, **volunteerObj)
        for educationObj in education:
            Education.objects.create(resume=resume, **education)
        for award in awards:
            Award.objects.create(resume=resume, **award)
        for publication in publications:
            Publication.objects.create(resume=resume, **publication)
        for skill in skills:
            Skill.objects.create(resume=resume, **skill)
        for language in languages:
            Language.objects.create(resume=resume, **language)

        return resume