document.addEventListener('DOMContentLoaded', function() {
  const registerButtons = document.querySelectorAll('.register-btn');
  const loginContainer = document.getElementById('login-container');
  const welcomeContainer = document.getElementById('welcome-container');
  const container = document.querySelector('#vjiro');
  const changeModeButton = document.querySelector('#change-mode-to-login');

  let flag = true;

  function swapContainers() {
    if (flag === true) {
      loginContainer.classList.add('swap-back');
      welcomeContainer.classList.add('swap');

      // Удаляем классы после завершения анимации
      setTimeout(() => {
        loginContainer.classList.remove('swap-back');
        welcomeContainer.classList.remove('swap');
      }, 500); // Время должно совпадать с продолжительностью анимации в CSS

      container.style.flexDirection = 'row-reverse';
      changeModeButton.textContent = 'LOGIN';
      flag = false;
    }
    else {
      loginContainer.classList.add('swap');
      welcomeContainer.classList.add('swap-back');

      // Удаляем классы после завершения анимации
      setTimeout(() => {
        loginContainer.classList.remove('swap');
        welcomeContainer.classList.remove('swap-back');
      }, 500); // Время должно совпадать с продолжительностью анимации в CSS

      container.style.flexDirection = 'row';
      changeModeButton.textContent = 'REGISTRATION';
      flag = true;
      }

  }

  // Используем одну кнопку для переключения между контейнерами
  document.getElementById('change-mode-to-login').addEventListener('click', function(event) {
    event.preventDefault();
    swapContainers();
  });


  // Наведение и убирание мыши для всех кнопок
  registerButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.boxShadow = '0 0 10px 5px #2e4d3c';
    });

    button.addEventListener('mouseout', () => {
      button.style.boxShadow = 'none';
    });
  });

  // Обработка события отправки формы
  const forms = document.querySelectorAll('.registration-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      const username = document.querySelector('#username').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      if (username.length < 3) {
        alert('Ваше имя должно содержать не менее 3 символов, молодой маг!');
        event.preventDefault();
        return;
      }

      // Простая валидация, можно добавить дополнительные проверки
      // event.preventDefault(); // Убедитесь, что это нужно
      window.location.href = '/main'; // Перенаправление после успешной валидации
    });
  });
});
