from django.db import models
from User.models import User_Details

# Create your models here.
class Role_Details(models.Model):
    Name = models.ForeignKey(Name,on_delete=models.PROTECT)
    Description = models.TextField()
    #users =models.ManyToManyField(Description)
    roles = models.ManyToManyField(Name)
