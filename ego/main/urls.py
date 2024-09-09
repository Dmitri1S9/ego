from django.urls import path
from . import views


urlpatterns = [
    path('', views.world, name='worldPage'),
    path('test', views.test, name='testPage'),
]
