import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

export default function ExpenseItem({ title, amount, date }) {
  // const [title, setTitle] = useState(title);

  const clickHandler = () => {
    // setTitle('updated!');
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
}
