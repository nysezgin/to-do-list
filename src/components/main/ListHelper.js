import React from "react";
import ShowTodo from "./ShowTodo";

export default function ListHelper({
  itemsLeft,
  isDesktop,
  handleFilter,
  handleClearCompleted,
}) {
  return (
    <div className="todo-helper">
      <p className="todo-helper__items-left">{itemsLeft + (itemsLeft === 1 ? " item left" : " items left")}</p>
      {isDesktop && <ShowTodo handleFilter={handleFilter} />}
      <button
        type="button"
        className="todo-helper__clear-button"
        onClick={() => handleClearCompleted()}
      >
        Clear Completed
      </button>
    </div>
  );
}
