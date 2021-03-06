from django.urls import include, path
from rest_framework import routers
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/user/', views.CurrentUserInfo.as_view(), name='user_info'),
    path('api/card/', views.CurrentCardInfo.as_view(), name='card_info'),
    path('api/extract/', views.CurrentExtractInfo.as_view(), name='extract_info'),
    path('api/', include(router.urls), name='users_info'),
]
