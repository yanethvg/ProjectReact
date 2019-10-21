import React, { Component } from 'react';
import axios from 'axios';

//crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = '';
    
    state={
        categorias: []
     }

    componentDidMount(){
        this.obtenerCategorias();
    }
    obtenerCategorias = async () => {
        let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=en_ES`;


        let categorias = await axios.get(url);

       // console.log(categorias.data.categories);
       this.setState({
           categorias: categorias.data.categories
       })
    }
    render() {
        return (
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}


export default CategoriasProvider;
