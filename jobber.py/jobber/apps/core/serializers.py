from rest_flex_fields import FlexFieldsModelSerializer
from .models import Location


class LocationSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Location
        fields = [
            'id',
            'city',
            'state',
            'county',
            'latitude',
            'longitude',
            'population',
            'density',
            'incorporated',
            'timezone',
            'ranking',
            'zips',
        ]


class LocationReadSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Location
        fields = [
            'id',
            'city',
            'state',
            'county',
            'latitude',
            'longitude',
            'population',
            'density',
            'incorporated',
            'timezone',
            'ranking',
            'zips',
        ]


class LocationWriteSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = Location
        fields = [
            'id',
            'city',
            'state',
            'county',
            'latitude',
            'longitude',
            'population',
            'density',
            'incorporated',
            'timezone',
            'ranking',
            'zips',
        ]
        extra_kwargs = {
            'id': {'read_only': False}
        }


# class LocationReadSerializer(FlexFieldsModelSerializer):

#     class Meta:
#         model = Location
#         fields = [
#             'id',
#             'address1',
#             'address2',
#             'address3',
#             'address4',
#             'locality',
#             'region',
#             'postcode',
#             'country',
#         ]


# class LocationWriteSerializer(FlexFieldsModelSerializer):

#     class Meta:
#         model = Location
#         fields = [
#             'id',
#             'address1',
#             'address2',
#             'address3',
#             'address4',
#             'locality',
#             'region',
#             'postcode',
#             'country',
#         ]
#         extra_kwargs = {
#             'id': {'read_only': False}
#         }


