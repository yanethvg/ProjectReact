import React,{useEffect, useState} from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [ cargando, guardarCargando] = useState(false);
  const [resultado, guardarResultado] = useState([]);
  useEffect(
    () =>{
      const cotizarCriptomoneda = async () => {
        //si no hay moneda no ejecutar
        if(moneda === '' && criptomoneda === '') return;
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const response = await axios.get(url);
        //mostrar spinner
        guardarCargando(true);
        //ocultar spinner y guardar resultado
        setTimeout(()=> {
          guardarCargando(false);
          guardarResultado(response.data.DISPLAY[criptomoneda][moneda]);
        },3000)
      }
      cotizarCriptomoneda();
    },[criptomoneda,moneda]
  );
  //Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner></Spinner>:<Cotizacion resultado={resultado} valor={Object.keys(resultado).length}></Cotizacion>;
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="Imagen Criptomoneda" className="logotipo"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al instante</h1>
          <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
          ></Formulario>
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
