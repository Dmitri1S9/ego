document.addEventListener('DOMContentLoaded', function() {
  const registerButton = document.querySelector('.register-btn');

  registerButton.addEventListener('mouseover', function() {
    registerButton.style.boxShadow = '0 0 10px 5px #d4af37';
  });

  registerButton.addEventListener('mouseout', function() {
    registerButton.style.boxShadow = 'none';
  });

  // registerButton.addEventListener('click', function() {
  //   window.location.href = '/main';
  // });

  // Custom validation for fun fantasy feedback (optional)
  const form = document.querySelector('.registration-form');
  form.addEventListener('submit', function(event) {
    const username = document.querySelector('#username').value;
    // if (username.length < 3) {
    //   alert('Your name must be at least 3 letters long, young mage!');
    // }
    // event.preventDefault();
    window.location.href = '/main';
  });
});
