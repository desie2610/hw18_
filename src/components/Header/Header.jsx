import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${dark ? "dark" : ""}`}>
      <h1 className="header__title">Task Manager</h1>

      <button className="header__button" onClick={toggleTheme}>
        {dark ? "Світла тема" : "Темна тема"}
      </button>
    </header>
  );
}