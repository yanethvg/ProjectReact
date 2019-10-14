import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  
  const [budget, saveBudget] = useState(0);
  const [restante, saveRestante]= useState(0);
  const [answerBudget, saveAnswerBudget] = useState(true);
  const [ createBudget , saveCreateBudget ] = useState(false);
  //arreglo de gastos
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});

  useEffect(() => {
   if(createBudget){
    const listExpenses = [...expenses, expense];
    saveExpenses(listExpenses);
    // restar el presupuesto
    const presupuestoRestante = restante - expense.quantityExpense;
    saveRestante(presupuestoRestante);
    // Una vez que se agrega, lo ponemos como false
    saveCreateBudget(false);
   }
   
  },[createBudget,expenses,expense,restante,budget]);

 

  const deleteExpense = id => {
    const listExpense = [...expenses];
    const expenseActual = listExpense.filter(expense => expense.id= id)
    const presupuestoRestante = restante + expenseActual[0].quantityExpense;
    saveRestante(presupuestoRestante);
    listExpense.splice(id,1);
    saveExpenses(listExpense);
   
  }
  const deleteBudget = budget => {
    saveBudget(0);
    saveAnswerBudget(true);
  }

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expense</h1>
        <div className="contenido-principal contenido">
          {answerBudget ? (
            <Pregunta
              saveBudget={saveBudget}
              saveAnswerBudget={saveAnswerBudget}
              saveRestante={saveRestante}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  saveExpense={saveExpense}
                  saveCreateBudget={saveCreateBudget}
                  ></Formulario>
              </div>
              <div className="one-half column">
                <Listado
                  expenses={expenses}
                  deleteExpense ={ deleteExpense}
                  deleteBudget={deleteBudget}
                  budget={budget}
                ></Listado>
                <ControlPresupuesto
                  budget={budget}
                  restante={restante}
                ></ControlPresupuesto>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
