from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path("",views.HomePage),
    #path('datapost1',views.dataPosting1),
    path('classApi',views.DataUsingClass.as_view()),
    path('getdata',views.DataGet.as_view()),
    path('updateData',views.DataUpdate.as_view()),
    path('deleteData',views.DataDelete.as_view())
]