import React from 'react';

const Imagen = ({imagen}) => {
    const {largeImageURL, likes, previewURL, tags, views} = imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <div className="card-text">{views} Views</div>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL} target="_black" className="btn btn-primary btn-block" rel="noopener noreferrer">See Image</a>
                </div>
            </div>
        </div>
    );
};


export default Imagen;