from mercado_app.models import Produto, Mercado, Lista, Items
from rest_framework import viewsets, permissions
from .serializers import ProdutoSerializer, MercadoSerializer, ListaSerializer, ItemsSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProdutoSerializer


class MercadoViewSet(viewsets.ModelViewSet):
    queryset = Mercado.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MercadoSerializer


class ListaViewSet(viewsets.ModelViewSet):
    queryset = Lista.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListaSerializer


class ItemsViewSet(viewsets.ModelViewSet):
    queryset = Items.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ItemsSerializer
