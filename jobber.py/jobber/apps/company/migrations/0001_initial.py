# Generated by Django 2.2.6 on 2019-11-01 05:35

from django.db import migrations, models
import jobber.apps.company.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to=jobber.apps.company.models.get_company_upload_path)),
                ('locations', models.ManyToManyField(related_name='_company_locations_+', to='core.Location')),
            ],
        ),
    ]
