$(document).ready(function () {
  $('.library-menu').click(function (event) {
    $(this).toggleClass('active');
    event.preventDefault();
  });
  // modal registrarte
  $("#myBtn").click(function () {
    $("#myModal").modal();
  });

  var $email = $('#email');
  var $password = $('#psw2');
  var $checked = $('input[type="checkbox"]');

  var validateEmail = false;
  var validatePassword = false;
  var validateChecked = false;

  // Función habilitar boton
  function activeButton() {
    if (validateEmail && validatePassword && validateChecked) {
      $('form > button').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  }

  // validar email
  $email.on('input', function (event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  // validar password
  $password.on('input', function (event) {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $checked.on('click', function (event) {
    if (event.target.checked) {
      //   alert('entre');
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('form > button').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'vista-home.html';
  });
});