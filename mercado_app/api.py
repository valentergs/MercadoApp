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
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MercadoAppProdSerializer

    def get_queryset(self):
        return self.request.user.produtos.all()

    # Para poder ligar o OWNER ao objeto criado:
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LojaViewSet(viewsets.ModelViewSet):
    queryset = Loja.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MercadoAppLojaSerializer
