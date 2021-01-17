import React from "react";
import CreateTodo from "./main/CreateTodo";
import ShowTodo from "./main/ShowTodo";
import TodoList from "./main/TodoList";

export default function Main() {
  return (
    <main>
      <CreateTodo />
      <TodoList />
      <ShowTodo />
    </main>
  );
}
