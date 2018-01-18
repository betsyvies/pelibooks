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
        var films = data[$genre];

        films.forEach(element => {
          $.getJSON('http://www.omdbapi.com/?apikey=b264a6c3&t=' + encodeURI(element)).then(function(response) {
            $('#container-film').append(`
            <div class="col-xs-6 col-sm-3 col-md-3 margin-btm-img-pelis">
              <div class="text-center">
              <img class="img-responsive img-pelis" src="${response.Poster}">
              <h5>${response.Title}</h5>
              <a onclick="movieSelected('${response.imdbID}')" class="btn btn-primary" href="#">Movie Detaills</a>
              </div>
            </div>
            `);      
          });
        });
        $('#container-film').html('');   
      }
    }
  });
});

function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'vista-movies.html';
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem('movieId');
	
  axios.get('http://www.omdbapi.com/?apikey=b264a6c3&i=' + movieId)
    .then((response) => {
      let movie = response.data;
		
      let output = `
    <div class="row">
      <div class="col-md-4">
        <img src="${movie.Poster}"  class="thumbnail">
      </div>
      <div class="col-md-8">
        <h2>${movie.Title}</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Genere: ${movie.Genre}</strong></li>
          <li class="list-group-item"><strong>Released: ${movie.Released}</strong></li>
          <li class="list-group-item"><strong>Rated: ${movie.Rated}</strong></li>
          <li class="list-group-item"><strong>Rating: ${movie.imdbRating}</strong></li>
          <li class="list-group-item"><strong>Director: ${movie.Director}</strong></li>
          <li class="list-group-item"><strong>Writer: ${movie.Writer}</strong></li>
          <li class="list-group-item"><strong>Actors: ${movie.Actors}</strong></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="well">
        <h3>Plot</h3>
        <hr>
        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View iMDB</a>
        <a href="index.html" class="btn btn-default">Go Back To Search</a>
      </div>
    </div>
    `;
		
      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
