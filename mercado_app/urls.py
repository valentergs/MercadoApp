from rest_framework import routers
from .api import ProdutoViewSet, ListaViewSet, MercadoViewSet, ItemsViewSet

router = routers.DefaultRouter()
router.register('api/Produto', ProdutoViewSet, 'lista_app')
router.register('api/Lista', ListaViewSet, 'lista_app_lista')
router.register('api/Mercado', MercadoViewSet, 'lista_app')
router.register('api/Items', ItemsViewSet, 'lista_app')

urlpatterns = router.urls
