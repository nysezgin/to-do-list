import React from 'react'

export default function ListHelper({itemsLeft}) {
    return (
        <div className="todo-helper">
            <p className="todo-helper__items-left">{itemsLeft + " items left"}</p>
            <button type="button" className="todo-helper__clear-button">Clear Completed</button>
        </div>
    )
}
