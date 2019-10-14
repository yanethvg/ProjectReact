import React,{ useState } from 'react';
import Error from './Error';

function Buscador({guardarBusquedaTema}) {

    const [busqueda, guardarBusqueda] = useState('');
    const  [error, guardarError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();
        //validar
        if(busqueda === '') {
            guardarError(true);
            return;
        }
        //Enviar el termino hacia el componente principal
        guardarError(false);
        guardarBusquedaTema(busqueda)
        
    }
    return (
        <form
            onSubmit={buscarImagen}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        name="" 
                        id=""
                        className="form-control form-control-lg"
                        placeholder="Image Search, Example: Coffee"
                        onChange={e => guardarBusqueda(e.target.value)}
                        />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                        />
                </div>
            </div>
            {(error) ? <Error mensaje="Agrega un termino de Busqueda"></Error>:null}
        </form>
    );

}
export default Buscador;