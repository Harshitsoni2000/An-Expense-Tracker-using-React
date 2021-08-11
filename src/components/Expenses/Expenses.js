import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    // <ExpenseItem data={props.data[0]}/>
    // <ExpenseItem data={props.data[1]}/>
    // <ExpenseItem data={props.data[2]}/>
    // <ExpenseItem data={props.data[3]}/>
    const [filteredYear, setFilteredYear] = useState("2021");

    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // Filtering elements based on year
    let filteredExpenses = props.data.filter((expense) => expense.date.getFullYear().toString()===filteredYear);

    // Conditional Rendering
    // We can write JSX outside of the return statement as well, and assign it to a variable


    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selectedValue={filteredYear} onSelect={expenseFilterHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {<ExpensesList expenses={filteredExpenses} />}

                {/*We prefer to leave the logic out of our return statements, hence the approaches below are not appreciated*/}

                {/* -----1. USING GATES FOR SHORT CIRCUTING-----*/}
                {/*filteredExpenses.length===0 && <p>No Expense Found !</p>*/}
                {/*filteredExpenses.length>0 && filteredExpenses.map((item, index) => <ExpenseItem key={item.id} data={item}/>)*/}

                {/* -----2. USING TERNARY OPERATOR-----*/}
                {/*filteredExpenses.length===0 ? <p>No Expense Found !</p> : filteredExpenses.map((item, index) => <ExpenseItem key={item.id} data={item}/>)*/}
            </Card>
        </li>
    );
};

export default Expenses;
