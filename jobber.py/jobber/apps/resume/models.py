from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from jobber.apps.core.choices import LANGUAGES, STUDY_TYPES, MASTERY_LEVELS, FLUENCY_LEVELS, ONLINE_NETWORKS, COUNTRIES


class Resume(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='resumes')
    name = models.CharField(max_length=255, blank=True)
    label = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, blank=True)
    phone = models.CharField(max_length=255, blank=True)
    website = models.URLField(max_length=255, blank=True)
    summary = models.TextField(blank=True)
    # address1 = models.CharField(max_length=255, blank=True)
    # address2 = models.CharField(max_length=255, blank=True)
    # address3 = models.CharField(max_length=255, blank=True)
    # address4 = models.CharField(max_length=255, blank=True)
    # locality = models.CharField(max_length=255, blank=True)
    # region = models.CharField(max_length=255, blank=True)
    # postcode = models.CharField(max_length=255, blank=True)
    # country = models.CharField(max_length=255, blank=True, choices=COUNTRIES)


class Profile(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='profiles', blank=True)
    network = models.CharField(max_length=255, blank=True, choices=ONLINE_NETWORKS)
    username = models.CharField(max_length=255, blank=True)
    url = models.URLField(max_length=255, blank=True)


class Work(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='work', blank=True)
    company = models.CharField(max_length=255, blank=True)
    position = models.CharField(max_length=255, blank=True)
    website = models.URLField(max_length=255, blank=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    summary = models.TextField(blank=True)
    highlights = ArrayField(models.TextField(), blank=True, default=list)


class Volunteer(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='volunteer', blank=True)
    organization = models.CharField(max_length=255, blank=True)
    position = models.CharField(max_length=255, blank=True)
    website = models.URLField(max_length=255, blank=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    summary = models.TextField(blank=True)
    highlights = ArrayField(models.TextField(), blank=True, default=list)


class Education(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='education', blank=True)
    institution = models.CharField(max_length=255, blank=True)
    area = models.CharField(max_length=255, blank=True)
    study_type = models.CharField(max_length=255, blank=True, choices=STUDY_TYPES)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    gpa = models.DecimalField(max_digits=2, decimal_places=1, null=True)
    courses = ArrayField(models.CharField(max_length=255), blank=True, default=list)


class Award(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='awards', blank=True)
    title = models.CharField(max_length=255, blank=True)
    date = models.DateField(null=True)
    awarder = models.CharField(max_length=255, blank=True)
    summary = models.TextField(blank=True)


class Publication(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='publications', blank=True)
    name = models.CharField(max_length=255, blank=True)
    publisher = models.CharField(max_length=255, blank=True)
    release_date = models.DateField(null=True)
    website = models.URLField(max_length=255, blank=True)
    summary = models.TextField(blank=True)


class Skill(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='skills', blank=True)
    name = models.CharField(max_length=255, blank=True)
    level = models.CharField(max_length=255, blank=True, choices=MASTERY_LEVELS)
    keywords = ArrayField(models.CharField(max_length=255), blank=True, default=list)


class Language(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='languages', blank=True)
    language = models.CharField(max_length=255, blank=True, choices=LANGUAGES)
    fluency = models.CharField(max_length=255, blank=True, choices=FLUENCY_LEVELS)