import React from 'react';
import { EventosConsumer } from './../context/EventosContext';
import Evento from './Evento';
import Loader from 'react-loader-spinner'

const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            
            <EventosConsumer>
                {(value)=>{
                    return  value ? value.eventos.map(evento => (
                        <Evento
                            key = {evento.id}
                            evento={evento}
                        ></Evento>
                        
                    )): <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                        />
                }}
            </EventosConsumer>
        </div>
    );
};

export default ListaEventos;