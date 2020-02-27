from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path("",views.HomePage1),
    #path('datapost1',views.dataPosting1),
    path('classApi1',views.DataUsingClass1.as_view()),
    path('getdata1',views.DataGet1.as_view()),
    path('updateData1',views.DataUpdate1.as_view()),
    path('deleteData1',views.DataDelete1.as_view())
]