from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class UserReadSerializer(FlexFieldsModelSerializer):

    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
            'email',
            'avatar',
            'is_active',
            'last_login',
        ]

    expandable_fields = {
        'resumes': ('jobber.apps.resume.ResumeReadSerializer', {'source': 'resumes', 'many': True}),
    }


class UserWriteSerializer(FlexFieldsModelSerializer):
    password = serializers.CharField(required=True, write_only=True, style={"input_type": "password"}, min_length=8, max_length=140)
    confirm_password = serializers.CharField(required=True, write_only=True, style={"input_type": "password"}, min_length=8, max_length=140)
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'avatar',
            'is_active',
            'password',
            'confirm_password',
        ]
    
    def validate(self, values):
        password = values.get('password')
        confirm_password = values.get('confirm_password')
        if password != confirm_password:
            raise serializers.ValidationError('Passwords do not match.')
        return values
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        return super().create(validated_data)

            