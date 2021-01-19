import React from "react";
import moonImg from "./images/icon-moon.svg";
import sunImg from "./images/icon-sun.svg";

export default function Header({ theme, toggleTheme }) {
  return (
    <header>
      <h1 className="header__title">
        <a href={"/"}>TODO</a>
      </h1>
      <button className="header__toggle-wrapper" onClick={() => toggleTheme()}>
        <p className="header__toggle-name">
          {theme === "light-theme" ? "Dark Theme" : "Light Theme"}
        </p>
        <div className="header__toggle-image-wrapper" onClick={() => toggleTheme()}>
          <img
            className={
              theme === "light-theme"
                ? "header__toggle-image"
                : "header__toggle-image header__toggle-image--deactive"
            }
            src={moonImg}
            alt=""
          />
          <img
            className={
              theme === "dark-theme"
                ? "header__toggle-image"
                : "header__toggle-image header__toggle-image--deactive"
            }
            src={sunImg}
            alt=""
          />
        </div>
      </button>
      <div className="header__background" />
    </header>
  );
}
