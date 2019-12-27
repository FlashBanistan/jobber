import factory
import factory.django
from jobber.apps.company.models import Company


class CompanyFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "company.Company"

    name = factory.Faker("company")
    description = factory.Faker('paragraph')
    image = None

    @factory.post_generation
    def locations(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of locations were passed in, use them
            for location in extracted:
                self.locations.add(location)
