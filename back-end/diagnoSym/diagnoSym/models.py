from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email = models.EmailField(max_length=60, unique=True)
    gender = models.CharField(max_length=15)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=60)

class Symptoms(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    symptom = models.CharField(max_length=100)
    value = models.IntegerField(default=0)

class Prediction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    disease = models.CharField(max_length=150)
    score = models.FloatField(default=0)