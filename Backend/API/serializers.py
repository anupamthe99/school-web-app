from rest_framework import serializers
from .models import School

class schoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields=['id','name','discription','img_school_link','conatact_no']