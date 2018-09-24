from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^', include(('authapi.urls', 'authapi', ), namespace='authapi')),
    url(r'^', include(('Base.urls', 'Base'), namespace='Base')),
    url(r'^', include(('dailyapi.urls', 'Base'), namespace='dailyapi')),
    url('grappelli/', include('grappelli.urls')),  # grappelli URLS
    url(r'^daily/', admin.site.urls),
]
