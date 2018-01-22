$(document).ready(function() {
  // modal login
  var $email = $('#email-login');
  var $password = $('#psw-login');
  var $buttonSubmit = $('#login-button');

  // habilitar el boton
  var validateEmailLogin = false;
  var validatePasswordLogin = false;

  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.name);
  console.log(localStorage.email);
  console.log(localStorage.password);

  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      alert('ok email');
      validateEmailLogin = true;
    }
  });

  $password.on('input', function() {
    if ($(this).val() === localStorage.password) {
      alert('ok password');
      validatePasswordLogin = true;
    }
  });

  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
    if (validateEmailLogin && validatePasswordLogin) {
      alert('Ya eres parte de Pelibooks!!');
      window.location.href = 'vista-home.html';
    } else {
      alert('Regístrate por favor');
    }
  });
});
