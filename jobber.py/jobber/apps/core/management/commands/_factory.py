import factory
import factory.django
from factory.fuzzy import FuzzyChoice
from jobber.apps.core.models import Location
from jobber.apps.core.choices import STATES, COUNTRIES


class LocationFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "core.Location"

    address1 = factory.Faker('street_address')
    address2 = ''
    address3 = ''
    address4 = ''
    locality = factory.Faker('city')
    region = FuzzyChoice(STATES, getter=lambda c: c[0])
    postcode = factory.Faker('postalcode')
    country = FuzzyChoice(COUNTRIES, getter=lambda c: c[0])

