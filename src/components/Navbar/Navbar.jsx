import { Link } from "react-router-dom";

import "./Navbar.css";
import navLinks from "./navLinks";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          L'Athena Royale
        </Link>

        <nav>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
