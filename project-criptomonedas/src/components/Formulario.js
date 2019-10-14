import React,{useState, useEffect} from 'react';
import Criptomoneda from './Criptomoneda';
import axios from 'axios';
import Error from './Error';

function Formulario(props) {
    const {guardarMoneda,guardarCriptomoneda}= props;
    const [criptomonedas, guardarCriptomonedas] = useState([]);
    const [monedaCotizar, guardarMonedaCotizar] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError ]=useState(false);
    
  useEffect(
    ()=>{
      const consultarAPI = async () =>{
        const url ='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const response = await axios.get(url);
        //console.log(response.data.Data);
        //Colocar Respuesta en el state
        guardarCriptomonedas(response.data.Data);
       
      }
      consultarAPI();
    },[]
  )
  //validar que el usuario llena ambos campos
  const cotizarMoneda = e => {
      e.preventDefault();
      //validar si ambos campos estan llenos
      if(monedaCotizar === '' || criptoCotizar ===''){
          guardarError(true);
          return;
      }
      //pasar los datos al componente principal
      guardarMoneda(monedaCotizar);
      guardarCriptomoneda(criptoCotizar);
      guardarError(false);
  }
  //Mostrar el error en caso de que exista
  const componente = (error) ? <Error mensaje="Ambos campos son obligatorios"></Error>  :null;
    return (
        <form 
        onSubmit={cotizarMoneda}
        >
            {componente}
            <div className="row">
                <label htmlFor="">Elige tu Moneda</label>
                <select
                onChange={e => guardarMonedaCotizar(e.target.value)}
                className="u-full-width"
                >
                    <option value="">-Elige tu Moneda</option>
                    <option value="USD">Dolas Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="">Elige tu Criptomoneda</label>
                <select
                 onChange={e => guardarCriptoCotizar(e.target.value)}
                 className="u-full-width"
                >
                    <option value="">-Elige tu Criptomoneda</option>
                    {criptomonedas.map(cripto=>(
                        <Criptomoneda
                            key={cripto.CoinInfo.Id}
                            criptomoneda={cripto.CoinInfo}
                        ></Criptomoneda>
                    ))}
                </select>
            </div>
            <input type="submit" value="Calcular" className="button-primary u-full-width"/>
        </form>
    );

}
export default Formulario;