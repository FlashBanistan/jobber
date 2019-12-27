from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import TokenObtainPairPatchedSerializer


class TokenObtainPairPatchedView(TokenObtainPairView):
    serializer_class = TokenObtainPairPatchedSerializer