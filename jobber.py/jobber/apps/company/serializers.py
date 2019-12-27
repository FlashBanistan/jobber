from django.shortcuts import get_object_or_404
from rest_flex_fields import FlexFieldsModelSerializer
from jobber.apps.core.serializers import LocationWriteSerializer
from jobber.apps.core.models import Location
from .models import Company


class CompanyReadSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Company
        fields = [
            'id',
            'name',
            'description',
            'image',
        ]

    expandable_fields = {
        'employees': ('jobber.apps.authentication.UserReadSerializer', {'source': 'employees', 'many': True}),
        'locations': ('jobber.apps.core.LocationReadSerializer', {'source': 'locations', 'many': True})
    }


class CompanyWriteSerializer(FlexFieldsModelSerializer):
    locations = LocationWriteSerializer(many=True)
    class Meta:
        model = Company
        fields = [
            'id',
            'name',
            'description',
            'image',
            'locations',
        ]
        extra_kwargs = {
            'locations': {'required': False}
        }

    def create(self, validated_data):
        locations = validated_data.pop('locations', None)
        company = Company.objects.create(**validated_data)
        for location in locations:
            saved_location = Location.objects.create(**location)
            company.locations.add(saved_location)
        return company

    def update(self, instance, validated_data):
        locationsToUpdate = validated_data.pop('locations', None)
        for k, v in validated_data.items():
            setattr(instance, k, v)
        instance.save()

        for locationToUpdate in locationsToUpdate:
            id = locationToUpdate.get('id', None)
            if id:
                location = Location.objects.get(id=id)
                for k, v in locationToUpdate.items():
                    setattr(location, k, v)
                location.save()
            else:
                location = Location.objects.create(**locationTOUpdate)
                instance.locations.add(location)
        
        return instance