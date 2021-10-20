import React, { useState } from 'react'

import { Card } from '../../UI/Card'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate'

import './ExpenseItem.css'

export const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const handleClick = () => {
        setTitle('New Title')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">€ {props.amount}</div>
            </div>
            <button onClick={handleClick}>Change title</button>
        </Card>
    )
}
