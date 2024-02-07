import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar">
      <div class="navbar-title">Your Title</div>
      <div class="navbar-buttons">
        <Link to="/">
          <button class="navbar-button">About</button>
        </Link>
        <Link to="/portfolio">
          <button class="navbar-button">Portfolio</button>
        </Link>
        <Link to="/contact">
          <button class="navbar-button">Contact Me</button>
        </Link>
        <Link to="/resume">
          <button class="navbar-button">Resume</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
