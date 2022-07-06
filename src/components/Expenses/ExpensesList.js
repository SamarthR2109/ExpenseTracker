import './ExpensesList.css'
import React from 'react';
import Expense from './Expense';
const ExpensesList = props => {

    if(props.filteredExpense.length === 0){
        return <h2 className='expenses-list__fallback'>No data found </h2>
    }
    var sum;
    for (let i = 0; i < props.filteredExpense.length; i++) {
        sum = props.filteredExpense.Amount;
    }
    if(sum>=5){
        alert("Amount Exceeded");
    }

        return (<ul className='expenses-list'>
            { props.filteredExpense.map((expense) =>
      (<Expense
        key={expense.id}
        title={expense.title}
        Amount={expense.Amount}
        date={expense.date} />))}
        
        </ul>);
};

export default ExpensesList;