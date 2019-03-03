from django.db import models

import uuid


class Produto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    embalagem = models.CharField(max_length=200, blank='true', default='NA')

    def __str__(self):
        return f"{self.nome} {self.marca} - {self.embalagem}"

    class Meta:
        ordering = ('nome',)


class Mercado(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=100)
    unidade = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nome} - {self.unidade}"


class Lista(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    data = models.DateField(auto_now_add=True)
    mercado = models.ForeignKey(Mercado, on_delete=models.CASCADE)
    items = models.ManyToManyField(
        Produto, through='Items', related_name='list_of_items')

    def __str__(self):
        return f"{self.data} - {self.mercado}"


class Items(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    lista = models.ForeignKey(
        Lista, on_delete=models.CASCADE, related_name='items_to_lista')
    quantidade = models.IntegerField()
    preço = models.IntegerField()

    def __str__(self):
        return '{}'.format(self.produto)

    class Meta:
        verbose_name_plural = 'Itens'
