# Generated by Django 2.2.8 on 2020-12-18 19:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resume',
            name='title',
        ),
    ]
