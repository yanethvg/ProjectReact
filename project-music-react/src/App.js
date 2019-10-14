import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cancion from "./components/Cancion";
import Informacion from "./components/Informacion";

function App() {
  //declaracion de estados
  //Utilizar useState con 3 states
  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  //Metodo para consultar la API de Letras de canciones
  const consultarAPILetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    //consultar a la api
    const response = await axios(url);
    //almacenar el artista que se busco
    agregarArtista(artista);
    //almacener la letra en el state
    agregarLetra(response.data.lyrics);
  };

  //Metodo para consultar la API de información
  const consultarAPIinformacion = async () => {
    if (artista) {
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const response = await axios(url);
      agregarInfo(response.data.artists[0]);
      //console.log(info);
    }
  };

  useEffect(() => {
    consultarAPIinformacion();
    console.log("Hey agregaste un artista");
  }, [artista]);

  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion info={info}></Informacion>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
