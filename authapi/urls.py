from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    url(r'authapi-token-auth/', obtain_jwt_token),
    url(r'authapi-token-refresh', refresh_jwt_token),
]
