import React from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) =>  (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                ></Noticia>
            ))}
        </div>
);


ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired,
};

export default ListaNoticias;