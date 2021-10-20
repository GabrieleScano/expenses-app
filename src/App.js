import { useState } from 'react'
import './App.css'
import { Expenses } from './components/Expenses/Expenses'
import { NewExpense } from './components/NewExpense/NewExpense'
import { INITIAL_EXPENSES } from './data/expensesData'

const App = () => {
  
const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

const addExpenseHandler = expense => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  })
}
  return (
   <div>
     <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses}/>
   </div>
  )
}

export default App
