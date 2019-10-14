import React,{Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({budget,restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={revisarPresupuesto(budget,restante)}>
                Residuary: $ {restante}
            </div>
        </Fragment>
    );
};



export default ControlPresupuesto;