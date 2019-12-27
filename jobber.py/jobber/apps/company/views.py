from rest_framework.viewsets import ModelViewSet
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from rest_framework.decorators import action
from jobber.apps.core.mixins import ReadWriteSerializerMixin
from jobber.apps.core.models import Location
from .models import Company
from .serializers import CompanyReadSerializer, CompanyWriteSerializer


class CompanyViewSet(ReadWriteSerializerMixin, ModelViewSet):
    queryset = Company.objects.all()
    read_serializer_class = CompanyReadSerializer 
    write_serializer_class = CompanyWriteSerializer

    @action(methods=["delete"], detail=True)
    def remove_locations(self, request, pk):
        company = self.get_object()
        locations_to_remove = request.data.get('locations', None)
        if locations_to_remove:
            for location in locations_to_remove:
                instance = Location.objects.get(id=location)
                instance.delete()
        serialized_response = self.read_serializer_class(context={"request": request}, instance=company, expand=["locations"],)
        return Response(status=HTTP_200_OK, data=serialized_response.data)
