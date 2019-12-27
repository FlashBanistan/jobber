from uuid import uuid4
from django.db import models
from django.conf import settings


def get_company_upload_path(instance, filename):
    _file_path, file_extension = os.path.splitext(filename)
    return 'companies/{file_id}'.format(file_id=uuid4().hex + file_extension)


class Company(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to=get_company_upload_path, null=True, blank=True)
    locations = models.ManyToManyField('core.Location', related_name='+')
