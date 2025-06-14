import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">
          <a href="#header">Matias Agado</a>
        </span>
        <div className="logo-dot"></div>
      </div>

      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
    </header>
  );
}

export default Header;
