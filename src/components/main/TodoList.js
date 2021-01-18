import React from 'react'
import SingleTodo from "../main/SingleTodo";
import ListHelper from './ListHelper';

export default function TodoList({isDesktop}) {
    return (
      <div className="todo-container">
        <SingleTodo text={"placeholder 1"} />
        <SingleTodo text={"placeholder 2"} />
        <SingleTodo text={"placeholder 3"} />
        <ListHelper itemsLeft={3} isDesktop={isDesktop} />
      </div>
    );
}
