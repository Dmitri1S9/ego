from django.db import models
from django.contrib.auth.hashers import make_password, check_password


class UserPlayer(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Увеличил размер для хранения хешированного пароля
    player = models.BooleanField(default=True)

    def set_password(self, raw_password):
        """Хеширует пароль перед сохранением."""
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        """Проверяет пароль."""
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.username
