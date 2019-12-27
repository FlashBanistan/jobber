import pytz
import datetime
import factory
import factory.django
from factory.fuzzy import FuzzyDateTime, FuzzyChoice
from jobber.apps.authentication.models import User


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = 'authentication.User'

    email = factory.Faker('email')
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    date_joined = FuzzyDateTime(datetime.datetime(2008, 1, 1, tzinfo=pytz.UTC))
    # password = factory.PostGenerationMethodCall('set_password', 'admin123')