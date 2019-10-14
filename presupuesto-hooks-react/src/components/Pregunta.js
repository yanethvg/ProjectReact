import React,{ Fragment , useState } from 'react';
import Error from './Error';

function Pregunta(props) {

    const { saveBudget , saveAnswerBudget , saveRestante}= props;

    //definir el state
    const [quantity,saveQuantity] = useState(0);
    const [error, saveError]=useState(false);

    const handleQuantity = e => {
        saveQuantity(
            parseInt(e.target.value,10)
        )
    }//validar el presupuesto
    const addBudget = e => {
        e.preventDefault();
        //validar
        if(quantity < 1 || isNaN(quantity) ){
            saveError(true);
            return;
        }
        //Si se pasa la validación
        saveError(false);
        saveBudget(quantity);
        saveRestante(quantity);
        saveAnswerBudget(false);

    }
    return (
       <Fragment>
            <h2>Place your budget</h2>
            {error ? <Error mensaje='The budget is incorrect'></Error> : null }
            <form
            onSubmit={addBudget}
            >
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Add your budget"
                    name="" 
                    id=""
                    onChange={handleQuantity}
                />
                <input 
                    type="submit" 
                    value="Define Budget"
                    className="button-primary u-full-width"
                />
            </form>
       </Fragment>
    );
}

export default Pregunta;