from rest_framework import serializers
from django.contrib.auth.models import User
from .models import CardInformations, Extract

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'password']
        read_only_fields = ['id', 'url', 'username', 'password']

class CardInformationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardInformations
        fields = ['id', 'validity', 'image', 'message']
        read_only_fields = ['id', 'validity', 'image', 'message']

class ExtractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Extract
        fields = ['id', 'type', 'value', 'date', 'store']
        read_only_fields = ['id', 'type', 'value', 'date', 'store']
