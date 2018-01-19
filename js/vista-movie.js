$(document).ready(function() { 
  getMovie(); 

  $inputSearch = ('#input-search');

  $inputSearch.on('keyup', function() {
    let searchText = $(this).val();
  });
});

// $(function() {
//   $('#rateYo').rateYo({
//     rating: 3.6
//   });
// });
