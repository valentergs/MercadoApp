from mercado_app.models import Produto, Loja, Lista
from rest_framework import viewsets, permissions
from .serializers import (MercadoAppListaSerializer,
                          MercadoAppLojaSerializer,
                          MercadoAppProdSerializer,)


class ListaViewSet(viewsets.ModelViewSet):
    queryset = Lista.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MercadoAppListaSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MercadoAppProdSerializer


class LojaViewSet(viewsets.ModelViewSet):
    queryset = Loja.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MercadoAppLojaSerializer
