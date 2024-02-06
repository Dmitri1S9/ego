from django.urls import path
from. import views

urlpatterns = [
    path('', views.print_start_html, name='homePage'),
    path('test', views.test, name='testPage')
]
