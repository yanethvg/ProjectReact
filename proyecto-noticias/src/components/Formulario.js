import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        categoria: ''
    }
    componentDidMount(){
        this.setState({
            categoria: 'general'
        })
    }
    handleCategory = e => {
        this.setState({
            categoria: e.target.value
        },() => {
            //Pasarlo a la pagina principal
            this.props.consultarNoticias(this.state.categoria);
        })
       
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form action="">
                        <h2>Encuentra Noticias por Categoria</h2>
                        <div className="input-field col s12 ">
                            <select
                                onChange={this.handleCategory}>
                                <option value="general">General</option>
                                <option value="sport">Deportes</option>
                                <option value="technology">Tecnologia</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;