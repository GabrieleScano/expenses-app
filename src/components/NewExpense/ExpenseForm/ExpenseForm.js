import React from 'react'
import './ExpenseForm.css'

export const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="date" min="2019-01-01" max="2022-01-01" step="0.01" />
                </div>
                <div className="new-expense__actions"></div>
                <button type="submit">Add Expense</button>
            </div>
            
        </form>
    )
}
