import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

class userDetailCover extends Component {
    constructor(){
        super();
        this.state ={
            cover: 'https://icon-library.net/images/avatar-icon-png/avatar-icon-png-10.jpg'
        }
    }
    render() {
        const { firstName,lastName }= this.props;
        return (
           
            <div className="UserDetailCover">
                <img 
                src={this.state.cover} 
                alt="avatar" 
                className="UserDetailCover-image"/>
                <h2 className="UserDetailBody-name">{firstName + " "+ lastName }</h2>
            </div>
        );
    }
}

userDetailCover.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default userDetailCover;