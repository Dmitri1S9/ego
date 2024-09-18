from django.db.models import F
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.template import loader
from django.http import HttpResponse
from django.utils import timezone


def world(request):
    return render(request, 'main/world_page.html')


def test(request):
    return render(request, 'main/test.html')


def login(request):
    return render(request, 'main/register.html')

