from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Location
from .serializers import LocationSerializer

class LocationViewSet(ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    authentication_classes = []
    search_fields = ['city', 'county', 'zips']
    ordering_fields = ['city', 'population', 'ranking']