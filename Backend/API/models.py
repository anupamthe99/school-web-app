from django.db import models

class School(models.Model):
    name=models.CharField(max_length=80)
    img_school_link=models.CharField(max_length=1000)
    discription=models.TextField()
    conatact_no=models.CharField(max_length=11)

    def __str__(self):
        return self.name
