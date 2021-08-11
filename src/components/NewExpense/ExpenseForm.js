import {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    // USING MULTIPLE STATES TOGETHER
    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: ""
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);

        // SETTING MULTIPLE STATES
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         title: props.target
        //     };
        // });
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expense = {
            title,
            amount,
            date: new Date(date)
        };
        // Passing the value to its parent component,
        // as a parameter in the function passed as an argument from the parent
        // props.onFormSubmit(expense);
        props.onFormSubmit(expense);

        // Resetting the input fields
        setTitle("");
        setAmount("");
        setDate("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input value={title} type="text" onChange={titleChangeHandler} />
               </div>
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input value={amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input value={date} type="date" min="2021-01-01" max="2024-12-31" onChange={dateChangeHandler} />
               </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
