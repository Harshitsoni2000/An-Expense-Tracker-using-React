import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2021, 7, 14),
    },
    { id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2022, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 5, 12),
    },
];
const App = () => {

    const [expensesData, setExpensesData] = useState(expenses);

    const dataRecieveHandler = (data) => {
        const id = `e${(Math.floor(Math.random()*1000)+4)}`;

        // Wrong way
        // setExpensesData([{id, ...data}, ...expenses]);

        // RIGHT WAY
        setExpensesData(prevState=> {
            return [{id, ...data}, ...prevState];
        });
    };

    return (
        <div>
          <h1 className="mainHeading">EXPENSE TRACKER</h1>
          <NewExpense onDataRecieved={dataRecieveHandler} />
          <Expenses data={expensesData} />
        </div>
    );

    // Without JSX
    // React.createElement takes in 3 arguments, the component to be created, the attributes that the component should have, and a list of child elements it holds.
    // return React.createElement(
    //     'div', {},
    //     React.createElement('h1', {}, "Let's get Started!"),
    //     React.createElement(Expenses, {data: expenses})
    // );
}

export default App;
