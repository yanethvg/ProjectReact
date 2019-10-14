import React,{Fragment, useState} from 'react';
import Error from './Error';
import shorid from 'shortid';

function Formulario(props) {

    const {saveExpense, saveCreateBudget} = props;
    // state
    const [ nameExpense , saveNameExpense ] = useState('');
    const [ quantityExpense, saveQuantityExpense ] = useState(0);
    const [ error, saveError ] = useState(false);

    //cuando se agrega el gasto
    const addExpense = e => {
        e.preventDefault();
        // validar
        if(quantityExpense < 1 || isNaN(quantityExpense) || nameExpense ==='' ){
            saveError(true);
            return;
        }
       
        //construir el objeto de Gasto
        const expense= {
            nameExpense,
            quantityExpense,
            id: shorid.generate()
        }
        //pasar el gasto al componente principal
        saveExpense(expense);
        saveCreateBudget(true);
        //eliminar Alerta
        saveError(false);
        //Resetear el Form
        saveNameExpense('');
        saveQuantityExpense(0);
    }
    return (
        <Fragment>
            <form
                onSubmit={addExpense}
            >
                <h2>Add your expenses here</h2>
                {error ? <Error mensaje='Both fields are required o The expense is incorrect'></Error> : null }
                <div className="campo">
                    <label htmlFor="">Name Expense</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Food"
                        onChange={e => saveNameExpense(e.target.value)}
                        value={nameExpense}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="">Quantity Expense</label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        onChange={e=> saveQuantityExpense(parseInt(e.target.value,10))}
                        value={quantityExpense}
                    />
                </div>
                <input type="submit" value="Add Expense" className="button-primary u-full-width"  />
            </form>
        </Fragment>
    );
}

export default Formulario;