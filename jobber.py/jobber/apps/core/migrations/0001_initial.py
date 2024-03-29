# Generated by Django 2.2.6 on 2019-11-01 05:35

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(blank=True, db_index=True, max_length=255)),
                ('state', models.CharField(blank=True, db_index=True, max_length=255)),
                ('county', models.CharField(blank=True, db_index=True, max_length=255)),
                ('latitude', models.CharField(blank=True, db_index=True, max_length=255)),
                ('longitude', models.CharField(blank=True, db_index=True, max_length=255)),
                ('population', models.IntegerField(blank=True, db_index=True)),
                ('density', models.IntegerField(blank=True, db_index=True)),
                ('incorporated', models.BooleanField(blank=True, db_index=True)),
                ('timezone', models.CharField(blank=True, db_index=True, max_length=255)),
                ('ranking', models.IntegerField(blank=True, db_index=True)),
                ('zips', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=255), blank=True, db_index=True, default=list, size=None)),
            ],
        ),
    ]
