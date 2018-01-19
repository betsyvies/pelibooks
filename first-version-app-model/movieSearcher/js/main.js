$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	})
});

function getMovies(searchText) {
	axios.get('http://www.omdbapi.com/?apikey=b264a6c3&s=' + searchText)
	.then((response) => {
		let movies = response.data.Search;
		let output = '';
		
				
		$.each(movies, (index, movie) => {
			var itIs;
			var ids = axios.get('http://www.omdbapi.com/?apikey=b264a6c3&i=' + movie.imdbID)
				.then(function (response){
					let movieData = response.data;
					itIs = response.data.Writer.indexOf('novel');
					console.log(itIss);
					
			 })
			if(movie.Type === 'movie' && movie.Type != 'game'){
				output += `
				  <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Detaills</a>
            </div>
          </div>
				`;
				}
		});
		
		$('#movies').html(output);
		console.log(movies);
	})
	.catch((err) => {
		console.log(err);
	});
}

function movieSelected(id){
	sessionStorage.setItem('movieId', id);
	window.location = 'movie.html';
	return false;
}

function getMovie(){
	let movieId = sessionStorage.getItem('movieId');
	
	axios.get('http://www.omdbapi.com/?apikey=b264a6c3&i=' + movieId)
	.then((response) => {
		console.log(response);
		let movie = response.data;
		
		let output = `
    <div class="row">
      <div class="col-md-4">
        <img src="${movie.Poster}"     class="thumbnail">
      </div>
      <div class="col-md-8">
        <h2>${movie.Title}</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Genere: ${movie.Genre}</strong></li>
          <li class="list-group-item"><strong>Released: ${movie.Released}</strong></li>
          <li class="list-group-item"><strong>Rated: ${movie.Rated}</strong></li>
          <li class="list-group-item"><strong>Rating: ${movie.imdRating}</strong></li>
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
		var novelIndex = movie.Writer.indexOf('novel');
		console.log(novelIndex);
		var writers = movie.Writer;
		var n = writers.search('novel');
		var stringComma = writers.slice(0,n-1);
		var authorParenthesis = stringComma.slice(stringComma.lastIndexOf(',')+1);
		var end =authorParenthesis.lastIndexOf('(');
		var bookWriter = authorParenthesis.slice(0,end);
		console.log(bookWriter);
		
		$('#movie').html(output);
	})
	.catch((err) => {
		console.log(err);
	});
}
