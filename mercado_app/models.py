from django.db import models
from django.contrib.auth.models import User


class Produto(models.Model):
    nome = models.CharField(max_length=150)
    descrição = models.CharField(max_length=200, blank=True)
    seção = models.CharField(max_length=120, blank=True)
    owner = models.ForeignKey(
        User, related_name='produtos', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.nome


class Loja(models.Model):
    nome = models.CharField(max_length=150)
    local = models.CharField(max_length=150)

    def __str__(self):
        return self.nome


class Lista(models.Model):
    criada_em = models.DateTimeField(auto_now_add=True)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    loja = models.ForeignKey(Loja, on_delete=models.CASCADE)
    preço = models.IntegerField()

    def __str__(self):
        return self.loja
