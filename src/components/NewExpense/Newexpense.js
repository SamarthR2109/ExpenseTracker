import React,{useState} from "react";
import './Newexpense.css';
import Expenseform from "./Expenseform";
const Newexpense = (props) => {

    const [isediting,setisediting] = useState(false);
    const isEditinghandler = () => {
        setisediting(true);
    }

    const stopeditinghandler = () => {
        setisediting(false);
    }

    const saveExpensehandler = (EnteredExpenseData) => {
        const expensedata = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expensedata);
        setisediting(false);
    }
    if(isediting){
        return <div className="new-expense">
            <Expenseform onsaveExpenseData={saveExpensehandler} onchange={stopeditinghandler} />
        </div>
    }
    return <div className="new-expense"> 
        <button onClick={isEditinghandler}>Add New Expense</button>
    </div>
};

export default Newexpense;