import React from "react";
import { Link } from "react-router-dom";
//import Resume from "./Resume";

const Header = () => {
  return (
    <footer class="footer">
      <div class="foot-title">Media Links</div>
      <div class="foot-buttons">
        <Link to="https://github.com/MacroWil">
          <button class="foot-button">GitHub</button>
        </Link>
        <Link to="https://www.linkedin.com/in/maguire-wilson-4611012a0/">
          <button class="foot-button">LinkedIn</button>
        </Link>
        <Link to="https://dev.to/macrowil">
          <button class="foot-button">dev.to</button>
        </Link>
      </div>
    </footer>
  );
};

export default Header;
