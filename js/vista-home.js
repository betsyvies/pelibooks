$(document).ready(function() {
  $('.library-menu').click(function(event) {
	 $(this).toggleClass('active');
	  event.preventDefault();
  });
});
