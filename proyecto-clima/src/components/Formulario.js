import React,{ useState } from 'react';

function Formulario({datosConsulta}) {

    // state del Componente
    //busqueda= state, guardarBusqueda=this.setState({})
    const [busqueda, guardarBusqueda]=useState({
        ciudad: '',
        pais:''
    })

    const handleChange = e =>{
        //Cambiar el state
        guardarBusqueda({
            //hacer copia siempre para no perder campos
            ...busqueda,
            [e.target.name] : e.target.value
        })
       // console.log(busqueda);
    }

    const consultarClima = e => {
        e.preventDefault();
        //pasar hacia el componente principal la busqueda
        //aqui tengo el problema
        datosConsulta(busqueda);
        
    }
    return (
        <form  >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                    />
                <label htmlFor="ciudad">Ciudad: </label>
            <div className="input-field col s12">
                    <select onChange={handleChange} name="pais">
                        <option value="">Selecciona un pais</option>
                        <option value="us">Estados Unidos</option>
                        <option value="mx">México</option>
                        <option value="sv">El Salvador</option>
                        <option value="ar">Argentina</option>
                        <option value="co">Colombia</option>
                        <option value="es">España</option>
                        <option value="pe">Peru</option>
                        <option value="cr">Costa Rica</option>
                    </select>
                </div>
            </div>
            <div className="input-field col s12">
                <button
                   type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima"
                    onClick={consultarClima}
                >Buscar Clima</button>
            </div>
        </form>
    );
}


export default Formulario;