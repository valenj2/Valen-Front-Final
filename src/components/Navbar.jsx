import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={theme === "dark" ? "navbar-dark" : "navbar-light"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        {}
      </ul>
      {}

      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
