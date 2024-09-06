from django.urls import path
from. import views


app_name = 'main'
urlpatterns = [
    path("", views.IndexView.as_view(), name="login"),
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote"),
]
    #path('', views.print_start_html, name='homePage'),
    #path('test', views.test, name='testPage'),
    #path('world', views.world, name='worldPage')