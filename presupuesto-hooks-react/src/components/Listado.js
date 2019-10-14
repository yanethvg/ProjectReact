import React from 'react';
import Gasto from './Gasto';

function Listado(props) {
    const {expenses, deleteExpense,deleteBudget, budget }= props;
    return (
        <div className="gastos-realizados" >
            <h2>Listado</h2>
            {expenses.map(expense=>(
                <Gasto
                 key={expense.id}
                 expense={expense}
                 deleteExpense ={deleteExpense }
                ></Gasto>
            ))}
            <button 
            onClick ={() => deleteBudget(budget)}
            className="button-danger u-full-width">Delete Budget ${budget}</button>
        </div>
    );
}

export default Listado;