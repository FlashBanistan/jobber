from rest_framework import routers

from jobber.apps.core.views import LocationViewSet
from jobber.apps.authentication.views import UserViewSet
from jobber.apps.company.views import CompanyViewSet
from jobber.apps.job.views import JobPostingViewSet
from jobber.apps.resume.views import ResumeViewSet, ProfileViewSet, WorkViewSet, VolunteerViewSet, EducationViewSet, AwardViewSet, PublicationViewSet, SkillViewSet, LanguageViewSet


jobberRouter = routers.DefaultRouter()

jobberRouter.register('users', UserViewSet, base_name='user')
jobberRouter.register('companies', CompanyViewSet, base_name='company')
jobberRouter.register('resumes', ResumeViewSet, base_name='resume')
jobberRouter.register('profiles', ProfileViewSet, base_name='profile')
jobberRouter.register('work', WorkViewSet, base_name='work')
jobberRouter.register('volunteer', VolunteerViewSet, base_name='volunteer')
jobberRouter.register('education', EducationViewSet, base_name='education')
jobberRouter.register('awards', AwardViewSet, base_name='award')
jobberRouter.register('publications', PublicationViewSet, base_name='publication')
jobberRouter.register('skills', SkillViewSet, base_name='skill')
jobberRouter.register('languages', LanguageViewSet, base_name='language')
jobberRouter.register('locations', LocationViewSet, base_name='location')
jobberRouter.register('job_postings', JobPostingViewSet, base_name='job_posting')
