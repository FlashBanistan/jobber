from django.contrib.auth import get_user_model
from rest_framework.viewsets import ModelViewSet
from jobber.apps.core.mixins import ReadWriteSerializerMixin
from .serializers import UserReadSerializer, UserWriteSerializer

User = get_user_model()


class UserViewSet(ReadWriteSerializerMixin, ModelViewSet):
    queryset = User.objects.all()
    read_serializer_class = UserReadSerializer 
    write_serializer_class = UserWriteSerializer
