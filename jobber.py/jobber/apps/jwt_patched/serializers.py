from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from jobber.apps.authentication.serializers import UserReadSerializer


class TokenObtainPairPatchedSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        del token['user_id']
        token['user'] = UserReadSerializer(user).data

        return token