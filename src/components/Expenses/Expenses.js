import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem/ExpenseItem'
import { Card } from '../UI/Card'
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {
          props.items.map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        }
      </Card>
    </>
  );
};
  
