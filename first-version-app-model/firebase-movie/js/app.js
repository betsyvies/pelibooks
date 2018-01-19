$(document).ready(function(){
	var $name = $('#name');
	var $email = $('#email');
	var $password = $('#password');
	var $submitBtn = $('#submit-btn');
	var $googleBtn = $('#google-btn');
	var $loginBtn = $('#login-btn');
	var $check = $('#check');
	var $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCenaqX-0fATT_7QlLnMKlBsKUHIaKB1ls",
    authDomain: "pelibooks-22d3b.firebaseapp.com",
    databaseURL: "https://pelibooks-22d3b.firebaseio.com",
    projectId: "pelibooks-22d3b",
    storageBucket: "pelibooks-22d3b.appspot.com",
    messagingSenderId: "450507415481"
  };
  firebase.initializeApp(config);
	var database = firebase.database();
	
	function divsName() {
		for(var i=0; i<names.length;i++){
			$('#container-divs').append('<div class="col-xs-5 background-orange">' +
   			'<p class="names">' + names[i] + '</p>' +
				'<div class="form-group">' +
        '<label for="comment">Comment:</label>' +
        '<textarea class="form-control" rows="5" id="comment"></textarea>' +
        '</div>' +
			  '<button id="comment-btn" type="button" class="btn btn-dark">Comment</button>' +
   		'</div>');
		}
	};
	
	function validate_name() {
		return $name.val().length >= 3;
	}
	
	function validate_email(){
		return $CODE_TO_VALIDATE_EMAIL.test($email.val());
	}
	
	function validate_password(){
		return $password.val().length >= 6;
	}
	
	function validate_check(){
		return $check.prop('checked');
	}
	
	function finalValidation() {
		return validate_name() && validate_email() && validate_password() && validate_check();
	}
	
	function save_account(){
		var emailText = $('#email').val();
		var passwordText = $('#password').val();
		firebase.auth().createUserWithEmailAndPassword(emailText, passwordText).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode) {
        $('#password').val('');
        alert(errorMessage);
      }
    });
	};
	
	function login() {
		var emailText = $('#email-log').val();
		var passwordText = $('#password-log').val();
		firebase.auth().signInWithEmailAndPassword(emailText, passwordText).catch(function(error) {
			var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode) {
        $('#password-log').val('');
        alert(errorMessage);
	   	}
	   })
	}
	
	function enableBtn(e){
		if(finalValidation()) {
			save_account();
			console.log('hecho');
		} else {
			alert('No ha completado correctamente los inputs');
		}
	}
	
	divsName();
	$submitBtn.on('click',enableBtn);
	$loginBtn.on('click', login);
	
})