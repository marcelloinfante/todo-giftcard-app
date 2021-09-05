from django.contrib.auth.models import User
from .models import CardInformations, Extract
from .serializers import CardInformationsSerializer, ExtractSerializer, UserSerializer
from rest_framework import status, viewsets, permissions, generics
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

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


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

    def create(self, request):
        return Response("Create is not permitted", status=status.HTTP_403_FORBIDDEN)

    def update(self, request, pk=None):
        return Response("Update is not permitted", status=status.HTTP_403_FORBIDDEN)

    def partial_update(self, request, pk=None):
        return Response("Update is not permitted", status=status.HTTP_403_FORBIDDEN)

    def destroy(self, request, pk=None):
        return Response("Delete is not permitted", status=status.HTTP_403_FORBIDDEN)
