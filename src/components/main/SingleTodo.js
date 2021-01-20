import React from "react";
import deleteImg from "../images/icon-cross.svg";

export default function SingleTodo({
  id,
  text,
  isCompleted,
  handleCompleted,
  handleDelete,
  handleDrop,
}) {
  return (
    <div
      id={id}
      className="todo"
      draggable="true"
      onDragOver={(e) => e.preventDefault()}
      onDragStart={(e) => e.dataTransfer.setData("id", e.target.id)}
      onDrop={(e) => handleDrop(e, id)}
    >
      <button
        className={
          isCompleted ? "todo__icon todo__icon--completed" : "todo__icon"
        }
        onClick={() => handleCompleted(id)}
      />
      <p
        className={
          isCompleted ? "todo__text todo__text--completed" : "todo__text"
        }
      >
        {text}
      </p>
      <button
        type="button"
        className="todo__delete"
        onClick={() => handleDelete(id)}
      >
        <img src={deleteImg} alt="" />
      </button>
    </div>
  );
}
