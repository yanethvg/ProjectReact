import React, { Component } from 'react';
import PropTypes from 'prop-types';

class userPost extends Component {
    render() {
        const  {title, message} =this.props;
        return (
            <div className="UserPost">
                <h1>{title}</h1>
                <h2> {message} </h2>
            </div>
        );
    }
}

userPost.propTypes = {
    id: PropTypes.any,
    title:PropTypes.string,
    message:PropTypes.string,
};

export default userPost;