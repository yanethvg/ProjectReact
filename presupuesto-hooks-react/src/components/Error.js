import React,{Fragment} from 'react';

const Error = ({mensaje}) => {
    return (
       <Fragment>
           <p className="alert alert-danger error">{mensaje}</p>
       </Fragment>
    );
};

export default Error;