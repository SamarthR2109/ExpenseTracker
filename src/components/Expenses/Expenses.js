import React, { useState } from "react";
import Expense from "./Expense";
import './expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterchangehandler = (year) => {
    //console.log(year);
    setFilteredYear(year);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <li>
      <Card className="expenses">
        {/* /* <h2>Let's get started!</h2>
      <p>This is also visible</p> */ }

        <ExpenseFilter selected={filteredYear} filterchange={filterchangehandler} />
        <ExpensesChart expenses={filteredExpenses}/> 
        <ExpensesList filteredExpense={filteredExpenses}/>
      </Card>
    </li>
  );
    }

export default Expenses;