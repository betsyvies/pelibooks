var randomMovieArray = ['Star Wars', 'Games of Thrones', 'Lord of the Rings', 'Harry Potter'];

function apiCall(){
	var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
  var randomMovie = randomMovieArray[randomNumber];

	$.getJSON('http://www.omdbapi.com/?apikey=b264a6c3&t=' + encodeURI(randomMovie)).then(function(response){
		var image =response.Poster;
		if(image != "N/A"){
			$('img').attr('src', image);
		}
	})
}

$('button').click(function(){
	apiCall();
})