import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const stateInitial =  { 
    cita : {
        mascota :'',
        propietario: ' ',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class nuevaCita extends Component {
    state = { 
       ...stateInitial
    }
    //Cuando el usuario escribe en los inputs
    handleChange = e => {
        //console.log(e.target.name +': ' + e.target.value);
        //colorcar lo que el usuario escribe en el state
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }
    //Cuando el usuario envia el formulario
    handleSubmit = e => {
        e.preventDefault();

        //extraer los valores del state
        const { mascota, propietario, fecha, hora,sintomas } = this.state.cita;

        //validar que todos los campos esten llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora ==='' || sintomas===''){
            this.setState({
                error:true
            })
            //detener la ejecución
            return;
        }
        //generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //Agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita);

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInitial
        })

    }
    render() {
        //extraer el valor del state
        const {error} = this.state;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    { error ?<div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null }
                    <form 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange= {this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>{/**Cierra formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange= {this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>{/**Cierra formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange= {this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange= {this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>{/**Cierra formGroup */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                  className="form-control"
                                  name="sintomas"
                                  placeholder="Describe los sintomas"
                                  onChange= {this.handleChange}
                                  value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>{/**Cierra formGroup */}

                        <input type="submit" value="Agregar Nueva Cita" className="py-3 mt-2 btn btn-success btn-block"/>
                    </form>
                </div>
            </div> 
        );
    }
}
nuevaCita.propType ={
    crearNuevaCita: PropTypes.func.isRequired,
}

export default nuevaCita;