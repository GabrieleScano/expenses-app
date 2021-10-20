import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem/ExpenseItem'
import { Card } from '../UI/Card'
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => 
    (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
  }
  

  return (
    <>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <Card className="expenses">
        {expensesContent}

      </Card>
    </>
  );
};
  
