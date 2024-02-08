import React from "react";
import { Link } from "react-router-dom";
//import Resume from "./Resume";

const Header = () => {
  return (
    <footer className="footer">
      <div className="foot-title">Media Links</div>
      <div className="foot-buttons">
        <Link to="https://github.com/MacroWil">
          <button className="foot-button">GitHub</button>
        </Link>
        <Link to="https://www.linkedin.com/in/maguire-wilson-4611012a0/">
          <button className="foot-button">LinkedIn</button>
        </Link>
        <Link to="https://dev.to/macrowil">
          <button className="foot-button">dev.to</button>
        </Link>
      </div>
    </footer>
  );
};

export default Header;
