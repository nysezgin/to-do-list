import React, { useState, useEffect } from "react";
import ShowTodo from "./main/ShowTodo";
import SingleTodo from "./main/SingleTodo";
import ListHelper from "./main/ListHelper";
import { v4 as uuidv4 } from "uuid";

export default function Main({ isDesktop }) {
  //// Controlled Input
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo-list")) || []
  );
  const [shownTodoList, setShownTodoList] = useState([]); // The data here will be shown according to the filter
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Todo can't be empty!");
    } else {
      setTodoList((todoList) => {
        return [...todoList, { id: uuidv4(), isCompleted: false, text: input }];
      });
    }
    setInput("");
  };
  useEffect(() => {
    setShownTodoList(todoList);
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);
  // Handle Delete
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  // Handle Completed
  const handleCompleted = (id) => {
    const completedIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[completedIndex].isCompleted = !todoList[completedIndex]
      .isCompleted;
    setTodoList([...todoList]);
  };
  // Handle Clear Completed
  const handleClearCompleted = () => {
    const newTodoList = todoList.filter((todo) => todo.isCompleted === false);
    setTodoList(newTodoList);
  };
  // Handle Filter (All, Active, Completed)
  const handleFilter = (show) => {
    if (show === "all") {
      setShownTodoList(todoList);
    }
    if (show === "active") {
      const newShownTodoList = todoList.filter(
        (todo) => todo.isCompleted === false
      );
      setShownTodoList(newShownTodoList);
    }
    if (show === "completed") {
      const newShownTodoList = todoList.filter(
        (todo) => todo.isCompleted === true
      );
      setShownTodoList(newShownTodoList);
    }
  };
  // Handle Drop
  const handleDrop = (e, id) => {
    e.preventDefault();
    const idData = e.dataTransfer.getData("id");
    const idList = [].concat(todoList).map((todo) => todo.id)
    const draggedOnIndex = idList.indexOf(id);
    const draggedIndex = idList.indexOf(idData);
    const newTodoList = todoList;
    newTodoList.splice(
      draggedOnIndex,
      0,
      newTodoList.splice([draggedIndex], 1)[0]
    );
    setTodoList([...newTodoList])
  };
  return (
    <main>
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
        {shownTodoList.map((todo) => (
          <SingleTodo
            key={todo.id}
            {...todo}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            handleDrop={handleDrop}
          />
        ))}
        <ListHelper
          itemsLeft={
            todoList.filter((todo) => todo.isCompleted === false).length
          }
          isDesktop={isDesktop}
          handleClearCompleted={handleClearCompleted}
          handleFilter={handleFilter}
        />
      </div>
      {!isDesktop && <ShowTodo handleFilter={handleFilter} />}
      {isDesktop && (
        <div className="bottom-info">Drag and drop to reorder the list</div>
      )}
    </main>
  );
}
