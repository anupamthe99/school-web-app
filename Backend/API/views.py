from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from .models import School
from .serializers import schoolSerializer

class School_API(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin):
    queryset=School.objects.all()
    serializer_class=schoolSerializer
    

    def get(self, request):
        return self.list(request)

    def post(self,request):
        return self.create(request)

class School_API_detail(generics.GenericAPIView,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin):
    queryset = School.objects.all()
    serializer_class = schoolSerializer
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)