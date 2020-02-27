from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path("",views.HomePage2),
    #path('datapost1',views.dataPosting1),
    path('classApi2',views.DataUsingClass2.as_view()),
    path('getdata2',views.DataGet2.as_view()),
    path('updateData2',views.DataUpdate2.as_view()),
    path('deleteData2',views.DataDelete2.as_view())
]