import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Maguire Wilsons Portfolio</div>
      <div className="navbar-buttons">
        <Link to="/">
          <button className="navbar-button">About</button>
        </Link>
        <Link to="/portfolio">
          <button className="navbar-button">Portfolio</button>
        </Link>
        <Link to="/resume">
          <button className="navbar-button">Resume</button>
        </Link>
        <Link to="mailto:macrow.co@gmail.com">
          <button className="navbar-button" target="_blank">
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
