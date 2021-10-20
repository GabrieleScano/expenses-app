import React from 'react'

import { Card } from '../../UI/Card'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate'

import './ExpenseItem.css'

export const ExpenseItem = ({date, title, amount}) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">€ {amount}</div>
            </div>
        </Card>
    )
}
