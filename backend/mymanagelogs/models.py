from django.db import models
import datetime
# Create your models here.

class Logs(models.Model):
    message = models.TextField()
    severity = models.TextField()
    source = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
