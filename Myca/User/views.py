from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User_Details

# Create your views here.

def HomePage1(request):
    print("hiii")
    return HttpResponse("hello world")

#@api_view(['POST'])
#def dataPosting1(request):
#    print("requestrrr",request.data)
#    return Response("success")

class DataUsingClass1(APIView):
    def post(self,request):
        print("classsss",request.data)
        user = User_Details()
        user.Name = request.data['Name']
        user.Password = request.data['Password']
        
        user.save()

        return Response("Data saved successfully")
class DataGet1(APIView):
    def get(self,request):
        userData = User_Details.objects.filter().values()
        print("dataaa",userData)
        return Response(userData)

class DataUpdate1(APIView):
    def post(self,request):
        User_Details.objects.filter(id=request.data['id']).update(
            Name = request.data['Name'],
            Password = request.data['Password'],

        )
        return Response('updated successfully')

class DataDelete1(APIView):
    def post(self,request):
        User_Details.objects.filter(id = request.data['id']).delete()
        return Response("successfully deleted")


