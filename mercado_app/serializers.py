from rest_framework import serializers
from mercado_app.models import Produto, Loja, Lista


class MercadoAppProdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'


class MercadoAppLojaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loja
        fields = '__all__'


class MercadoAppListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lista
        fields = '__all__'
