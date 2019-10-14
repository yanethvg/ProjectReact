import React from 'react';

function Gasto({expense,deleteExpense }) {

    return (
        <li className="gastos">
            <p>
                {expense.nameExpense}
                <span className="gasto"> $ {expense.quantityExpense}</span>
                <button
                    type="button"
                    onClick={() => deleteExpense(expense.id)}
                >Eliminar</button>
            </p>
        </li>
    );
}

export default Gasto;