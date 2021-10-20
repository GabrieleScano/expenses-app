import React, { useState } from 'react'
import { Card } from '../UI/Card'
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'
import { ExpensesList } from './ExpensesList/ExpensesList'

export const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return (
    <>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};
  
