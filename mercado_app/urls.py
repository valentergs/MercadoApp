from rest_framework import routers
from .api import (ProdutoViewSet, ListaViewSet, LojaViewSet)

router = routers.DefaultRouter()
router.register('api/mercado_app/produto', ProdutoViewSet, 'mercado_app')
router.register('api/mercado_app/lista', ListaViewSet, 'mercado_app')
router.register('api/mercado_app/loja', LojaViewSet, 'mercado_app')

urlpatterns = router.urls
