//import Expense from "./components/Expense";
import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import Newexpense from "./components/NewExpense/Newexpense";
const dummy_expense = [
  //Static Contents
  {id:"e1", date: new Date(2022, 0, 22), title: "Petrol", Amount: 4500 },
   {id:"e2", date: new Date(2022, 1, 3), title: "Cricket kit", Amount: 5000 },
   {id:"e3", date: new Date(2022, 2, 4), title: "Groceries", Amount: 3500 },
   {id:"e4", date: new Date(2022, 3, 18), title: "Laptop Accessories", Amount: 3000 },
   {id:"e5", date: new Date(2022,4,15), title:"Home decor", Amount: 2500},
   {id:"e6", date: new Date(2022, 5, 17), title: "Jacket", Amount: 2500 },
   {id:"e7", date: new Date(2022, 6, 4), title: "Medical", Amount: 5500 },
  {id:"e8", date: new Date(2022, 7, 14), title: "Bike Expense", Amount: 4500 },
  {id:"e9", date: new Date(2022, 8, 11), title: "Headphones", Amount: 4500 },
  {id:"e10", date: new Date(2022, 9, 14), title: "Flight Tickets", Amount: 5500 },
  {id:"e11", date: new Date(2022, 10, 12), title: "Specs", Amount: 3000 },
   {id:"e12", date: new Date(2022, 11, 10), title: "Shoes", Amount: 1000 },
   {id:"e13", date: new Date(2022, 11, 9), title: "Bag", Amount: 3000 },
  {id:"e14", date: new Date(2022,4,25), title:"Football", Amount: 2500}
]
function App() {
  const [expenses,setExpenses] = useState(dummy_expense);
  const AddExpensehandler = (expensedata) => {
    setExpenses(prevExpenses => {
      return [expensedata,...prevExpenses];
    });
  }

 return (
     <div>
       <Newexpense onAddExpense={AddExpensehandler}/>
       <Expenses items={expenses} />
       
  </div>
 );
}
export default App;


//alert("Amount has been exceeded for this month");
//Moving data from child to a parent component
//This is called lifting up the NewExpense component
//moving up the data from child component to a parent component
//Lift until you have access to both the data components
    //This can also be written as:
  //   return React.createElement('div',{},
  //   React.createElement('h2',{}),
  //   React.createElement(Expenses,{expense:expense})
  // );