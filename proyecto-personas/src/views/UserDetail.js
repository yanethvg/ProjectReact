import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserById } from '../actions';
import UserDetailCover from '../components/userDetailCover';
import UserDetailBody from '../components/userDetailBody';

class UserDetail extends Component {
    
    componentDidMount(){
        this.props.getUserById(this.props.match.params.userId);
    }
    render() {
        if(this.props.userDetail.data){
        const {name, last_name, messages } = this.props.userDetail.data;
        return (
            <div>
                <UserDetailCover firstName={ name } lastName={ last_name }/>
                <UserDetailBody messages={ messages }/>
            </div>
        );
        }
        return (
            <div></div>
        );
    }
}
// Esta función convierte el valor de la stores que yo quiero
//en propiedades para el componente
function mapStateToProps(state){
    return {
        userDetail: state.getUserById
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUserById
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(UserDetail);