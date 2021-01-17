import React from 'react'

export default function ShowTodo() {
    return (
      <div className="show-todo">
        <button className="show-todo__button">All</button>
        <button className="show-todo__button">Active</button>
        <button className="show-todo__button">Completed</button>
      </div>
    );
}
