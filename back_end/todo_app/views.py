from django.contrib.auth.models import User
from .models import CardInformations, Extract
from .serializers import CardInformationsSerializer, ExtractSerializer, UserSerializer
from rest_framework import generics
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

class CurrentUserInfo(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user.username
        return User.objects.filter(username=user)


class CurrentCardInfo(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CardInformationsSerializer

    def get_queryset(self):
        user = self.request.user
        return CardInformations.objects.filter(user=user)


class CurrentExtractInfo(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ExtractSerializer

    def get_queryset(self):
        card = self.request.user
        return Extract.objects.filter(card=card)
