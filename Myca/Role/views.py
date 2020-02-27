from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Role_Details

# Create your views here.

def HomePage2(request):
    print("hiii")
    return HttpResponse("hello world")

#@api_view(['POST'])
#def dataPosting1(request):
#    print("requestrrr",request.data)
#    return Response("success")

class DataUsingClass2(APIView):
    def post(self,request):
        print("classsss",request.data)
        role = Role_Details()
        role.Name = request.data['Name']
        role.Description = request.data['Description']
        
        role.save()

        return Response("Data saved successfully")
class DataGet2(APIView):
    def get(self,request):
        userData = Role_Details.objects.filter().values()
        print("dataaa",userData)
        return Response(userData)

class DataUpdate2(APIView):
    def post(self,request):
        Role_Details.objects.filter(id=request.data['id']).update(
            Name = request.data['Name'],
            Description = request.data['Description'],

        )
        return Response('updated successfully')

class DataDelete2(APIView):
    def post(self,request):
        Role_Details.objects.filter(id = request.data['id']).delete()
        return Response("successfully deleted")


