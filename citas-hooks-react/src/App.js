import React, { useState,useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {

  //cargar las citas del localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales=[];
  }
  //use State retorna 2 funciones
  //El state actual =this.state;
  //Función que actualiza el state this.setState();
  const [citas, guardarCitas] = useState(citasIniciales);

  // metodo para agregar las nuevas citas al state
  const crearCita = cita=> {
    //Tomar una copia del state y agregar el nuevo paciente
    const nuevasCitas= [...citas,cita];
    //almacenar en el state
    guardarCitas(nuevasCitas);
    //console.log(citas);
  }
  //elimina las citas del state
  const eliminarCita = index =>{
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCitas(nuevasCitas);
  }
  //esto es como component didmount o didupdate
  useEffect(
    ()=>{
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if(citasIniciales){
        localStorage.setItem('citas',JSON.stringify(citas));
      }else{
        localStorage.setItem('citas',JSON.stringify([]));
      }
    }, [citas]
  )
  //Cargar condicionalmente un titulo
  const titulo= Object.keys(citas).length === 0 ? 'No hay Citas': 'Administrar las Citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="one-half column"><Formulario crearCita={crearCita}/></div>
            <div className="one-half column">
            <h2>{titulo}</h2>
              {citas.map((cita,index)=>(
                <Cita
                  key={index}
                  index={index}
                  cita={cita}
                  eliminarCita={eliminarCita}
                ></Cita>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
