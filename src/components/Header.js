import React from "react";
import moon from "./images/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <h1 className="header__Title">
        <a href={"/"}>TODO</a>
      </h1>
      <img src={moon} alt="" />
      <div className="header__background"/>
    </header>
  );
}
