$(document).ready(function() {
  $('.library-menu').click(function(event) {
    $(this).toggleClass('active');
    event.preventDefault();
  });

  $genre = $('#genders');

  $genre.on('change', function(event) {
    event.preventDefault();
    var $genre = $(this).val();

    for (const key in Object.keys(data)) {
      if ($genre === Object.keys(data)[key]) {
        debugger;
        for (var i = 0; i < data[$genre].length; i++) {
          var film = data[$genre][i];
          console.log(film);
          debugger;
          axios.get('http://www.omdbapi.com/?apikey=b264a6c3&s=' + film)
            .then((response) => {
              let movies = response.data.Search;
              let output = '';
              $.each(movies, (index, movie) => {
                output += `
          <div class="col-md-3">
            <div class="text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Detaills</a>
            </div>
          </div>
          `;
              });
              $('#container-film').html(output);
            })
            .catch((err) => {
              console.log(err);
            });
            
        }
      }
    }
  });
});

