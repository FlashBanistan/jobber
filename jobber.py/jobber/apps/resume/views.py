from rest_framework.viewsets import ModelViewSet
from jobber.apps.core.mixins import ReadWriteSerializerMixin
from .models import Resume, Profile, Work, Volunteer, Education, Award, Publication, Skill, Language
from .serializers import ResumeReadSerializer, ResumeWriteSerializer, ProfileSerializer, WorkSerializer, VolunteerSerializer, EducationSerializer, AwardSerializer, PublicationSerializer, SkillSerializer, LanguageSerializer


class ResumeViewSet(ReadWriteSerializerMixin, ModelViewSet):
    queryset = Resume.objects.all()
    read_serializer_class = ResumeReadSerializer 
    write_serializer_class = ResumeWriteSerializer


class ProfileViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class WorkViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer


class VolunteerViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


class EducationViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class AwardViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer


class PublicationViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer


class SkillViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class LanguageViewSet(ModelViewSet, ReadWriteSerializerMixin):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer