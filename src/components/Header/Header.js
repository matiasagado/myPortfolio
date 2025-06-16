import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          <a href="#home">MatiasAgado</a>
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
          <li className="nav-item">
            <a href="https://github.com/matiasagado">
              <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
            </a>
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
