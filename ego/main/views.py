from django.shortcuts import render


def print_start_html(request):
    return render(request, 'main/page.html')


def test(request):
    return render(request, 'main/test.html')


def world(request):
    return render(request, 'main/world.html')

