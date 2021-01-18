import React from 'react'
import ShowTodo from './ShowTodo'

export default function ListHelper({itemsLeft, isDesktop}) {
    return (
      <div className="todo-helper">
        <p className="todo-helper__items-left">{itemsLeft + " items left"}</p>
        {isDesktop && <ShowTodo />}
        <button type="button" className="todo-helper__clear-button">
          Clear Completed
        </button>
      </div>
    );
}
