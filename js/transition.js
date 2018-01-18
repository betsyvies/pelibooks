$(document).ready(function() {
  $viewBook = $('#view-book');
  $viewHome = $('#view-home');
  $viewFilters = $('#view-filters');
  $buttonGoBook = $('#button-go-book');
  $buttonFindMovieViewH = $('#button-find-movie-view-h');
  $buttonHomeViewF = $('#button-home-view-f');

  // Creamos funciones exclusivas de la vista index, que redireccionará a la vista splash
  $viewBook.css('display', 'none');
  $viewBook.fadeIn(2000);

  $buttonGoBook.click(function() {
    $viewBook.fadeOut(1000, redireccionarPag1);
  });

  function redireccionarPag1() {
		 window.location.href = 'views/vista-splash.html';
	 }

  // Creamos funciones exclusivas de la vista splash, para luego redireccionar a la vista home.

  $('#img-splash').fadeOut(1000, redireccionarPag2);

  function redireccionarPag2() {
    window.location.href = '../views/vista-home.html';
  };

  // Creamos la función que dará el efecto fade out y fade in a las vistas home y filtro
  $buttonFindMovieViewH.click(function() {
    $viewHome.fadeOut(1000, redireccionarPag3);
  });
  function redireccionarPag3() {
		 window.location.href = '../views/vista-filtros.html';
	 }
});
