from django.db import models
from django.conf import settings
from django.utils import timezone
from jobber.apps.core.choices import JOB_TYPES


class JobPosting(models.Model):
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    job_type = models.CharField(max_length=255, choices=JOB_TYPES, blank=True)
    created_on = models.DateTimeField(default=timezone.now)
    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name='+')
    company = models.ForeignKey('company.Company', on_delete=models.CASCADE, related_name='job_postings')
    locations = models.ManyToManyField('core.Location', related_name='job_postings')
    
    @property
    def suggest(self):
        return self.title