import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import axios from 'axios';
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';
import Productos from './components/Productos';
import Header from './components/Header';

function App() {
  const [ productos, guardarProductos] = useState([]);
  const [recargarProductos, guardarRecargar] = useState(true);


  useEffect(
    ()=> {
     if(recargarProductos){
      const consultarAPI = async () => {
        //consultar la api de json-server
       // const url ='http://localhost:4000/restaurant';
        const url ='https://my-json-server.typicode.com/yaneth94/ProjectReact/restaurant';
        const resultado = await axios.get(url);
        guardarProductos(resultado.data);
      }
      consultarAPI();
     }
     //Cambiar a false
     guardarRecargar(false);
    },[recargarProductos]
  )
  return (
    <Router>
      <Header></Header>
      <main className="container mt-5">
      <Redirect
            from="/"
            to="/productos" />
      <Switch>
        {/* Mas especificos arriba y dejas los de id abajo */}
        <Route  exact path="/productos"
          render={() =>(
            <Productos
              productos={productos}
              guardarRecargar={guardarRecargar}
            ></Productos>
        )}></Route>
        <Route exact path="/nuevo-producto" render={()=>(
          <AgregarProducto guardarRecargar={guardarRecargar}></AgregarProducto>
          )}></Route>
        <Route exact path="/productos/editar/:id" render={props =>{
            //es un string
            //console.log(props.match.params.id)
            const idProducto = parseInt(props.match.params.id);
            //el producto que se pasa al state
            const producto = productos.filter(producto => producto.id === idProducto);
            return(
              <EditarProducto producto={producto[0]} guardarRecargar={guardarRecargar}></EditarProducto>
            )
        }}></Route>
      </Switch>
      </main>
      <p className="mt-4 p-2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
