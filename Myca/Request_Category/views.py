from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Request_Category

# Create your views here.

def HomePage(request):
    print("hiii")
    return HttpResponse("hello world")

#@api_view(['POST'])
#def dataPosting1(request):
#    print("requestrrr",request.data)
#    return Response("success")

class DataUsingClass(APIView):
    def post(self,request):
        print("classsss",request.data)
        user = Request_Category()
        user.Name = request.data['Name']
        user.Description = request.data['Description']
        
        user.save()

        return Response("Data saved successfully")
class DataGet(APIView):
    def get(self,request):
        userData = Request_Category.objects.filter().values()
        print("dataaa",userData)
        return Response(userData)

class DataUpdate(APIView):
    def post(self,request):
        Request_Category.objects.filter(id=request.data['id']).update(
            Name = request.data['Name'],
            Description = request.data['Description'],

        )
        return Response('updated successfully')

class DataDelete(APIView):
    def post(self,request):
        Request_Category.objects.filter(id = request.data['id']).delete()
        return Response("successfully deleted")


