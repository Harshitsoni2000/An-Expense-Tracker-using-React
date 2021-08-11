import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    // FALLBACK, in case no data is recieved
    if(props.expenses.length===0) {
        return (<p className="expenses-list__fallback">No Expense Found !</p>);
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((item, index) => <ExpenseItem key={item.id} data={item}/>)}
        </ul>
    );
};

export default ExpensesList;
