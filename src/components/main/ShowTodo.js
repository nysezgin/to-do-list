import React from "react";

export default function ShowTodo({ handleFilter }) {
  return (
    <div className="show-todo">
      <button
        className="show-todo__button"
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className="show-todo__button"
        onClick={() => handleFilter("active")}
      >
        Active
      </button>
      <button
        className="show-todo__button"
        onClick={() => handleFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
