
let newMoviesArr = [];

window.getArray = (data) => {
//  Obteniendo arreglo de objetos con los resultados de la api para un título :c
  let results = data.Search;
  console.log(results);
  
  // Recorriendo el arreglo y recolecando un valor de cada objeto de acuerdo a la propiedad señalada
  let moviesArr = results.map((element) => {
    let titles = element.Title;
    let year = element.Year;
    let catalogueID = element.imdbID;
    // console.log(titles, year, catalogueID);

    return {
      títulos: element.Title,
      año: element.Year,
      identificador: catalogueID
    };
  });
    // Arreglo de objetos
  newMoviesArr.push(moviesArr);
  console.log(newMoviesArr);

  return newMoviesArr;
};

// Imprime undefined T_T
// const printMovies = (array) =>{
//   let button = document.getElementById('btn-movies');
//   let container = document.getElementById('results');
//   let printResult = '' ;
//   button.addEventListener('click', event =>{
//     for (i = 0; i < newMoviesArr.length; i++) {
//       printResult += `<ul><p>Título</p>
//       <li>${newMoviesArr.títulos}</li> 
//       </ul>`;
//       console.log(newMoviesArr.títulos);
//       container.innerHTML = printResult;
//     }
//   });
// };
// printMovies();