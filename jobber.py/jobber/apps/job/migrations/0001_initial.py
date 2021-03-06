# Generated by Django 2.2.6 on 2019-11-01 05:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0001_initial'),
        ('company', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobPosting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255)),
                ('description', models.TextField(blank=True)),
                ('job_type', models.CharField(blank=True, choices=[('FULL_TIME', 'Full-time'), ('PART_TIME', 'Part-time'), ('TEMPORARY', 'Temporary'), ('COMMISSION', 'Commission'), ('CONTRACT', 'Contract'), ('INTERNSHIP', 'Internship')], max_length=255)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='job_postings', to='company.Company')),
                ('locations', models.ManyToManyField(related_name='_jobposting_locations_+', to='core.Location')),
                ('posted_by', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
