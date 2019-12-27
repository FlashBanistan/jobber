import os
from uuid import uuid4
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.core.mail import send_mail
from django.db import models
from django.utils import timezone


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        '''
        Creates and saves a User with the given email and password.
        '''
        if not email:
            raise ValueError('You must provide an email.')
        if not password:
            raise ValueError('You must provide a password.')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password('admin123')
        user.save(using=self._db)

        return user

    def create_user(self, email, password=None, **extra_fields):
        return self._create_user(email, password, **extra_fields)


def get_avatar_upload_path(instance, filename):
    _file_path, file_extension = os.path.splitext(filename)
    return 'avatars/{file_id}'.format(file_id=uuid4().hex + file_extension)


class User(AbstractBaseUser):

    email = models.EmailField(unique=True, blank=True)
    first_name = models.CharField(max_length=30, blank=True, db_index=True)
    last_name = models.CharField(max_length=30, blank=True, db_index=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    avatar = models.ImageField(upload_to=get_avatar_upload_path, null=True, blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def email_user(self, subject, message, from_email=None, **kwargs):
        '''
        Sends an email to this User.
        '''
        send_mail(subject, message, from_email, [self.email], **kwargs)