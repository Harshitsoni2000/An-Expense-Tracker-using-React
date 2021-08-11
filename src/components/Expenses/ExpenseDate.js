import "./ExpenseDate.css";

const ExportDate = (props) => {
    const expenseMonth = new Date(props.date).toLocaleDateString("en-us", {month: "long"});
    const expenseYear = new Date(props.date).toLocaleDateString("en-us", {year: "numeric"});
    const expenseDay = new Date(props.date).toLocaleDateString("en-us", {day:"numeric"});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{expenseMonth}</div>
            <div className="expense-date__year">{expenseYear}</div>
            <div className="expense-date__day">{expenseDay}</div>
        </div>);
};

export default ExportDate;
