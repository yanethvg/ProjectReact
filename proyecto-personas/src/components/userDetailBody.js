import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import UserPost from './userPost';

class userDetailBody extends Component {
    constructor(props){
        super(props);
        this.state ={
            messages : this.props.messages
        }
    }
    render() {
        let messages = this.state.messages.map((currentValue, index, array) => {
            return(
              <UserPost 
              key={ currentValue.id } 
              id={ currentValue.id }
              title={ currentValue.title }
              message={ currentValue.message }/>
            );
        });
        return (
            <div className="UserDetailBody">
                <div>
                    { messages }
                </div>
            </div>
        );
    }
}

userDetailBody.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default userDetailBody;