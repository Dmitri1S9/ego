from django.urls import path
from . import views


app_name = 'main'
urlpatterns = [
    path('', views.world, name='worldPage'),
    path('test', views.test, name='testPage'),
]
