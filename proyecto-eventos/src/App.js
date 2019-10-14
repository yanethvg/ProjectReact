import React  from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import Formulario from './components/Formulario';
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';

function App() {
  return (
    <EventosProvider>
       <CategoriasProvider>
        <Header></Header>
        <div className="uk-container">
          <Formulario></Formulario>
          <ListaEventos></ListaEventos>
        </div>
      </CategoriasProvider>
    </EventosProvider>
   
  );
}

export default App;
