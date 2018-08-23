
let newMoviesArr = [];
let result = '';
let container = document.getElementById('results');

window.getArray = (data) => {
//  Obteniendo arreglo de objetos con los resultados de la api para los 3 títulos elegidos muajaj c:
  let results = data.Search;
  console.log(results);
  
  // Recorriendo el arreglo y recolecando un valor de cada objeto de acuerdo a la propiedad señalada
  let moviesArr = results.map((element) => {
    let titles = element.Title;
    let year = element.Year;
    let catalogueID = element.imdbID;
    let poster = element.Poster;
    // console.log(titles, year, catalogueID);
    result +=`<p>${titles}</p>
    <img src="${poster}"/>`;
    container.innerHTML = result;

    return {
      título: element.Title,
      año: element.Year,
      identificador: catalogueID
    };
  });  
  // Arreglo de objetos
  newMoviesArr.push(moviesArr);
  console.log(newMoviesArr);

  return newMoviesArr;
};

