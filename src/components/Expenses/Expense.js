import React from "react";
import './expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function Expense(props) {
    //const expensedate = new Date(2021,3,21);
    //const expensetitle = "Cricket Kit";
    //const expenseprice = 5000;

    // const month = props.date.toLocaleString('en-US',{month:'long'})
    // const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    // const year = props.date.getFullYear();

    //return should have only 1 root element
    //In use-state 1st value - initial 2nd value - value to be set And it returns an array 
    // const [title,setTitle] = useState(props.title);

    // const clickhandler = () => {
    //     //title = "Updated Title";
    //     setTitle("Updated");   //Component function will be executed again
    //     console.log(title);
    // }
    return <div>
        
        <Card className='expense-item'>
        {/* Display date component */}
        <ExpenseDate date={props.date}/> 
        <h2 className='expense-item__description'>{props.title}</h2>
        <div className='expense-item__price'>Rs. {props.Amount}</div>
        {/* //<button onClick={clickhandler}>Change Title</button> */}
    </Card>
    </div>
}
export default Expense;