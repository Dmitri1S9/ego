# users/views.py
from django.shortcuts import render, redirect
from django.contrib import messages  # Импортируем модуль для отображения сообщений
from .models import UserPlayer


def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Проверка, существует ли уже пользователь с таким email
        if UserPlayer.objects.filter(email=email).exists():
            messages.error(request, 'Электронная почта уже используется. Пожалуйста, выберите другую.')
            return render(request, 'users/register.html')

        # Сохраните пользователя в базе данных
        user = UserPlayer(username=username, email=email, password=password)
        user.save()

        return redirect('worldPage')  # Перенаправление на главную страницу приложения main

    return render(request, 'users/register.html')
