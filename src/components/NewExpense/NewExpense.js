import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const formHandler = (formObject) => {
        // Passing the data we recieved from the child,
        // to the parent.
        props.onDataRecieved(formObject);
    };

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing);
    }

    if(!isEditing) {
        return (<div className="new-expense">
                    <button onClick={clickHandler}>Add Expense</button>
                </div>);
    } else {
        return (<div className="new-expense">
                    <ExpenseForm onFormSubmit={formHandler} />
                </div>);

    }
};

export default NewExpense;
