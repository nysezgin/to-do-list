import React, { useState } from "react";
import deleteImg from "../images/icon-cross.svg";

export default function SingleTodo({
  id,
  text,
  handleCompleted,
  handleDelete,
}) {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="todo">
      <button
        className={
          completed ? "todo__icon todo__icon--completed" : "todo__icon"
        }
        onClick={() => {
          setCompleted(!completed);
          handleCompleted(id);
        }}
      />
      <p
        className={
          completed ? "todo__text todo__text--completed" : "todo__text"
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
