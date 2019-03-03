from rest_framework import serializers
from mercado_app.models import Produto, Mercado, Lista, Items


class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ('nome', 'marca', 'embalagem')


class MercadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mercado
        fields = '__all__'


class ListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lista
        fields = '__all__'
        depth = 1


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'
        depth = 1
