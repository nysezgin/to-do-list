import React from "react";
import moon from "./images/icon-moon.svg"

export default function Header() {
  return (
    <header>
      <h1>TODO</h1>
      <img src={moon} alt="" />
    </header>
  );
}
