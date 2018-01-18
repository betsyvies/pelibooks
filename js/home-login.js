$(document).ready(function () {
	
	var $email = $('#email');
  var $psw2 = $('#psw2');
  var $usrname = $('#usrname');
  var $checkboxSignUp = $('#checkboxSignUp');
	var $signUpButton = $('#signup-button');
	var $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	
	function validateEmail() {  
    return ($CODE_TO_VALIDATE_EMAIL.test($email.val()));
  }; 
	
	function validateName() {
		return ($usrname.val().length >= 3);
	};
	
	function validatePassword() {
		return ($psw2.val().length >= 6);
	};
	
	function agreeWithTerms() {
		return ($checkboxSignUp.prop("checked"));
	};
	
	function finalValidation(){
	 return validatePassword() && validateEmail() && validateName() && agreeWithTerms();
  };
	
	function enableDisable(event){
		event.preventDefault();
		console.log(finalValidation());
	};
	
	$signUpButton.click(enableDisable);
});

$(document).ready(function () {
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

  $email.on('input', function () {
    if ($(this).val() === localStorage.email) {
      alert('ok email');
      validateEmailLogin = true;
    }
  });

  $password.on('input', function () {
    if ($(this).val() === localStorage.password) {
      alert('ok password');
      validatePasswordLogin = true;
    }
  });

  $buttonSubmit.on('click', function (event) {
    event.preventDefault();
    if (validateEmailLogin && validatePasswordLogin) {
      alert('Ya eres parte de Pelibooks!!');
      window.location.href = 'vista-home.html';
    } else {
      alert('Regístrate por favor');
    }

  });
});*/




