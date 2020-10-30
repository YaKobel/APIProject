from django.db import models

# Create your models here.

class Tabl(models.Model):
    title = models.CharField(max_lenght=150)
    description = models.CharField(max_lenght=300, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)


    def __str__(self):
        return self.title
