from django.db import models


class Produto(models.Model):
    nome = models.CharField(max_length=150)
    descrição = models.CharField(max_length=200, blank=True)
    seção = models.CharField(max_length=120, blank=True)


class Loja(models.Model):
    nome = models.CharField(max_length=150)
    local = models.CharField(max_length=150)


class Lista(models.Model):
    criada_em = models.DateTimeField(auto_now_add=True)
    loja = models.ForeignKey(Produto, on_delete=models.CASCADE)
    produto = models.ForeignKey(Loja, on_delete=models.CASCADE)
    preço = models.IntegerField()
