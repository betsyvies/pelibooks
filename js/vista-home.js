$(document).ready(function() {
  $genre = $('#genders');
  
  $genre.on('change', function(event) {
    event.preventDefault();
    var $genre = $(this).val();

    for (const key in Object.keys(data)) {
      if ($genre === Object.keys(data)[key]) {
        for (var i = 0; i < data[$genre].length; i++) {
          let film = data[$genre][i];

          function getMovies(film) {
            axios.get('http://www.omdbapi.com/?apikey=b264a6c3&s=' + film)
              .then((response) => {
                console.log(response);
                let movies = response.data.Search;
                let output = '';
                $.each(movies, (index, movie) => {
                  output += `
				  <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Detaills</a>
            </div>
          </div>
				`;
                });
		
                $('#movies').html(output);
              })
              .catch((err) => {
                console.log(err);
              });
          }        
        }
      }
    }
  });
});


// function movieSelected(id) {
//   sessionStorage.setItem('movieId', id);
//   window.location = 'movie.html';
//   return false;
// }

// function getMovie() {
//   let movieId = sessionStorage.getItem('movieId');
	
//   axios.get('http://www.omdbapi.com/?apikey=b264a6c3&i=' + movieId)
//     .then((response) => {
//       console.log(response);
//       let movie = response.data;
		
//       let output = `
//     <div class="row">
//       <div class="col-md-4">
//         <img src="${movie.Poster}"     class="thumbnail">
//       </div>
//       <div class="col-md-8">
//         <h2>${movie.Title}</h2>
//         <ul class="list-group">
//           <li class="list-group-item"><strong>Genere: ${movie.Genere}</strong></li>
//           <li class="list-group-item"><strong>Released: ${movie.Released}</strong></li>
//           <li class="list-group-item"><strong>Rated: ${movie.Rated}</strong></li>
//           <li class="list-group-item"><strong>Rating: ${movie.imdRating}</strong></li>
//           <li class="list-group-item"><strong>Director: ${movie.Director}</strong></li>
//           <li class="list-group-item"><strong>Writer: ${movie.Writer}</strong></li>
//           <li class="list-group-item"><strong>Actors: ${movie.Actors}</strong></li>
//         </ul>
//       </div>
//     </div>
//     <div class="row">
//       <div class="well">
//         <h3>Plot</h3>
//         <hr>
//         <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View iMDB</a>
//         <a href="index.html" class="btn btn-default">Go Back To Search</a>
//       </div>
//     </div>
//     `;
		
//       $('#movie').html(output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
