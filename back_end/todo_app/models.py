from django.db import models
from django.contrib.auth.models import User

class CardInformations(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    validity = models.DateField()
    image = models.ImageField(blank=True)
    message = models.CharField(max_length=100)

class Extract(models.Model):
    EXTRACT_TYPE = [
        ('redeem', 'redeem'),
        ('reload', 'reload'),
        ('cancelation', 'cancelation'),
        ('activation', 'activation'),
    ]
    card = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=12, choices=EXTRACT_TYPE)
    value = models.DecimalField(max_digits=7, decimal_places=2)
    date = models.DateField()
    store = models.CharField(max_length=100)
