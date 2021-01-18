import React, {useState, useEffect} from "react";
import CreateTodo from "./main/CreateTodo";
import ShowTodo from "./main/ShowTodo";
import TodoList from "./main/TodoList";

export default function Main() {
const [size, setSize] = useState(window.innerWidth);

const checkSize = () => {
  setSize(window.innerWidth);
};

const isDesktop = size >= 1024;

useEffect(() => {
    window.addEventListener("resize", checkSize);
  return () => {
    window.removeEventListener("resize", checkSize);
  }
}, [])
  return (
    <main>
      <CreateTodo />
      <TodoList isDesktop={isDesktop} />
      {!isDesktop && <ShowTodo />}
    </main>
  );
}
