import React, { useState } from 'react'
import { ExpenseForm } from './ExpenseForm/ExpenseForm'
import './NewExpense.css'

export const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    const startEditingHandler = () => {
        setIsEditing(true)    
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {
                !isEditing ?
                <button onClick={startEditingHandler}>Add new expense</button> :
            <ExpenseForm 
                onCancel={stopEditingHandler} 
                onSaveExpenseData={saveExpenseDataHandler} 
            />
            }
        </div>
    )
}
