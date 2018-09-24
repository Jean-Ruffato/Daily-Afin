from django.conf.urls import url
from dailyapi.views import ApontamentosListView, PerfilListView, ApontamentosIDView, PerfilIDView

urlpatterns = [
    url(r'^api/apontamento/$', ApontamentosListView.as_view(), name='apontamento_list'),
    url(r'^api/perfis/$', PerfilListView.as_view(), name='perfis'),
    url(r'^api/perfis/(?P<usuario>\w+)/$', PerfilListView.as_view(), name='perfil_id'),
    url(r'^api/apontamentos/(?P<pk>[0-9]+)/$', ApontamentosIDView.as_view(), name='apontamento_id'),
]
