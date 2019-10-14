import React,{ Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';
class App extends Component {
  state = { 
    noticias: []
  }

  //hacer el llamado desde el componentDidMount
  componentDidMount(){
    this.consultarNoticias();
  }
  consultarNoticias = async (categoria='general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=a23c2e71e78b46f99e2a5a3e0fb2a408`;
    
    const respuesta = await fetch(url);
    const noticias =  await respuesta.json();
    //console.log(noticias.articles);

    this.setState({
      noticias:noticias.articles
    })
  }
  render(){
    return (
      <Fragment>
        <Header
          titulo='Noticias REACT API'
        />
        <div className="container white contenedor-noticias">
        <Formulario
          consultarNoticias={this.consultarNoticias}
        ></Formulario>
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
