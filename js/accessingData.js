/* Hacemos un array de objetos para acceder más rapido a la data */
genres = [
  {genre: 'Sci-Fi'},
  {genre: 'Romantic'},
  {genre: 'Biography'},
  {genre: 'Horror'},
  {genre: 'Fantasy'},
  {genre: 'Comedy'},
  {genre: 'Action'},
  {genre: 'Drama'},
  {genre: 'Adventure'},
  {genre: 'Suspense'}
];
  
/* Con esta funcion agregamos a los elementos de el array la cantidad
  de peliculas y un array de ellos*/
function getMovies() {
  for (var i = 0; i < genres.length; i++) {
    /* Peliculas por tipo de genero */
    films = Object.keys(data[genres[i].genre]);
    /* Numero de peliculas */
    genres[i].movies = films.length;
    /* Lista de pelicula */
    genres[i].moviesList = films;
  }
};  
getMovies();

console.log());