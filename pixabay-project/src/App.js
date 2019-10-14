import React, { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busquedaTema, guardarBusquedaTema] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [ paginaActual, guardarPaginaActual] =useState(1);
  const [ totalPagina, guardarTotalPaginas ] = useState(1);

  useEffect(() => {
    if (busquedaTema === "") return;
    const consultarAPI = async () => {
      const imagenesPorPagina = 30;
      const key = "13941554-867e67329ef42539f601d6ad7";
      const url = `https://pixabay.com/api/?key=${key}&q=${busquedaTema}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      const response = await fetch(url);
      const resultado = await response.json();
      //console.log(resultado);
      guardarImagenes(resultado.hits);
      //calcular el total de paginas
      const calcularTotalPagina = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPagina);
      // Mover la pantalla hacia la parte superios
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth',block:'end'});
    };
    consultarAPI();
  }, [busquedaTema,paginaActual]);

  const paginaAnterior = e => {
    e.preventDefault();
    let nuevaPaginaActual = paginaActual-1;
    //colocarlo en el state
    guardarPaginaActual(nuevaPaginaActual);
  }
  const paginaSiguiente = e => {
    e.preventDefault();
    let nuevaPaginaActual = paginaActual+1;
    //colocarlo en el state
    guardarPaginaActual(nuevaPaginaActual);
    
  }
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Search</p>
        <Buscador guardarBusquedaTema={guardarBusquedaTema}></Buscador>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        ></ListadoImagenes>
        { (paginaActual === 1) ? null: (
           <button  onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Preview &laquo;</button>
        ) }
        {(paginaActual === totalPagina) ? null:(
           <button onClick={paginaSiguiente} type="button" className="btn btn-info">Next &raquo;</button>
        )}
       
      </div>
    </div>
  );
}

export default App;
