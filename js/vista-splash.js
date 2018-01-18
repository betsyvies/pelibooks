/* Esta funcion pasa de la vista splash a la vista restaurant en 5 segundos */
$(document).ready(function() {
  setTimeout(function() {
    window.location.assign('vista-home.html');
  }, 3000);
});