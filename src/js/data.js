// const url = ('http://www.omdbapi.com/?apikey=2a4884f1&s=The+Lord+Of+The+Rings&plot=short&type=movie');

let api = '2a4884f1';
let search;
// Función para opción de select con alguna de las 3 películas
const selected = () => {
  let movieSelect = document.getElementById('select');
  search = movieSelect.options[movieSelect.selectedIndex].value;
  //  console.log(search);
  getMovies(search);
};
// Llamando a función selected con evento en etiqueta select
const selectChange = () => {
  selected();
};

window.getMovies = (search) => {
  url = 'http://www.omdbapi.com/?apikey='+ api + '&s='+ search + '&plot=short&type=movie';  
  fetch(url)
    .then(response => (response.json())
      .then((data) => {
        console.log(data);
        getArray(data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      }));
};
