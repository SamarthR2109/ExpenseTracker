import React,{useState} from "react";
import './Expenseform.css'
const Expenseform = (props) => {
    const [EnteredTitle,setEnteredTitle] = useState('')
    const [EnteredAmount,setEnteredAmount] = useState('');
    const [EnteredDate,setEnteredDate] = useState('');

// const [userinput,setuserinput] =  useState({
//     enteredtitle : '',
//     enteredamount : '',
//     entereddate : ''
// })

    const titlechangehandler = (event) =>{
        //set entered value here we depend on previous state 
        // setuserinput({
        //     ...userinput,
        //     enteredtitle : event.target.value,
        // })
        //OR safer way
        // setuserinput((prevstate) =>{
        //     return (...prevstate,enteredtitle:event.target.value)
        // })
        setEnteredTitle(event.target.value);
    }
    const Amountchangehandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const Datechangehandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submithandler = (event) => {
        event.preventDefault();
        const expensedata = {
            title : EnteredTitle,
            Amount : +EnteredAmount,
            date : new Date(EnteredDate)
        }
        props.onsaveExpenseData(expensedata);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }




    return <form onSubmit={submithandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={EnteredTitle} onChange={titlechangehandler} placeholder='Enter the title'/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="5" step="0" value={EnteredAmount} onChange={Amountchangehandler} placeholder='Enter the amount'/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' value={EnteredDate} min="2019-01-01" max="2023-12-31" onChange={Datechangehandler}/>
        </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onchange}>Cancel</button>
            <button type="Submit">Add Expense</button>
        </div>
    </form>
};
export default Expenseform;