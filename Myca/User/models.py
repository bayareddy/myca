from django.db import models
#from Role.models import Role_Details

# Create your models here.
class User_Details(models.Model):
    Name = models.CharField(max_length = 60)
    Password = models.TextField()
    #roles =models.ManyToManyField(Role_Details)
