# Generated by Django 2.2.6 on 2019-11-01 05:35

from django.db import migrations, models
import django.utils.timezone
import jobber.apps.authentication.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(blank=True, max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, db_index=True, max_length=30)),
                ('last_name', models.CharField(blank=True, db_index=True, max_length=30)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_active', models.BooleanField(default=True)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=jobber.apps.authentication.models.get_avatar_upload_path)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
            managers=[
                ('objects', jobber.apps.authentication.models.UserManager()),
            ],
        ),
    ]
