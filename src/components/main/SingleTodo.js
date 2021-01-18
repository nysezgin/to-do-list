import React from "react";
import deleteImg from "../images/icon-cross.svg";

export default function SingleTodo({ id, text, handleDelete }) {
  return (
    <div className="todo">
      <div className="todo__icon"/>
      <p className="todo__text">{text}</p>
      <button type="button" className="todo__delete" onClick={() => handleDelete(id)}><img src={deleteImg} alt=""/></button>
    </div>
  );
}
