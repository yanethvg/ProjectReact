import React,{ useState, useEffect } from 'react';
import axios from 'axios';

function Frase({frase}){
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  )
}

function App() {
  const [frase, obtenerFrase ] = useState({});

  async function consultaAPI() {
    let response = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    //agregar el resultado de la API al state; (similar a this.setState)
    obtenerFrase(response.data[0]);
  }
  //consulta a una rest api
  useEffect(
    () => {
      consultaAPI();
    },[]
  )

  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />
      <button onClick={() => consultaAPI()} >New Generate</button>
    </div>
  );
}

export default App;
