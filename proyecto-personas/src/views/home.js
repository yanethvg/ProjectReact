import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';
import UserItem from '../components/userItem';
import 'materialize-css/dist/css/materialize.min.css';
import { CircleLoader } from 'react-spinners';
import './index.css';

class Home extends Component {
    componentDidMount(){
        this.props.getUsers();
    }
    render(){
        let users = [];
        console.log(this.props.users.data);
        if (this.props.users.data) {
          users = this.props.users.data.map((currentValue, index, array) => {
            return(
              <UserItem
                key={ index }
                name={ currentValue.name }
                last_name={ currentValue.last_name }
                facebook={ currentValue.facebook }
                id={ currentValue.id }/>
            );
          })
        }
        if(this.props.users.type === "START_GET_USERS"){
          return(
            <div className="Home-preLoader">
               <CircleLoader
                color="#FFF"
                loading={true}/>
            </div>
          )
        }
        return(
          <div className="Home">
            { users }
          </div>
        );
      }
}
// Esta función convierte el valor de la stores que yo quiero
//en propiedades para el componente
function mapStateToProps(state){
    return {
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUsers
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);