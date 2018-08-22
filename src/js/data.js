// let searchQuery = document.getElementById('input').value;
//  Paso de convertir espacios a +
// const url = ('http://www.omdbapi.com/?apikey=2a4884f1&s=`{searchQuery}`&plot=short&type=movie')

const url = ('http://www.omdbapi.com/?apikey=2a4884f1&s=The+Lord+Of+The+Rings&plot=short&type=movie');


window.onload = () => {
  fetch(url)
    .then(response => (response.json())
      .then((data) => {
        getMovies(data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      }));
};
