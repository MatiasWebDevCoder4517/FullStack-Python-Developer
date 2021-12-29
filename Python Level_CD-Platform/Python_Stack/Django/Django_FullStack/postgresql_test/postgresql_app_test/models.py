from django.db import models

# Create your models here.
class ItemTest(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(default="type your description here")
    
