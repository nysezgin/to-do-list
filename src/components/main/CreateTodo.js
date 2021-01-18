import React, { useState } from "react";
import SingleTodo from "../main/SingleTodo";
import ListHelper from "./ListHelper";
import { v4 as uuidv4 } from "uuid";

export default function CreateTodo({ isDesktop }) {
  //// Controlled Input
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Todo can't be empty!");
    } else {
      setTodoList((todoList) => {
        return [...todoList, { id: uuidv4(), text: input }];
      });
    }
    setInput("");
  };
  // Handle Delete
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <>
      <form className="create-todo" onSubmit={handleSubmit}>
        <button
          type="submit"
          className={
            input
              ? "create-todo__icon create-todo__icon--active"
              : "create-todo__icon"
          }
        />
        <input
          className="create-todo__input"
          type="text"
          name="create-todo"
          placeholder="enter a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="todo-container">
        {todoList.map((todo) => (
          <SingleTodo
            key={todo.id}
            {...todo}
            handleDelete={handleDelete}
          />
        ))}
        <ListHelper
          itemsLeft={todoList.length}
          isDesktop={isDesktop}
        />
      </div>
    </>
  );
}
