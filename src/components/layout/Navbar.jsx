import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Rayhan<span>Dev</span>
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>

          <NavLink to="/book-reviews" onClick={closeMenu}>
            Books
          </NavLink>

          <NavLink to="/achievements" onClick={closeMenu}>
            Achievements
          </NavLink>

          <NavLink to="/travel" onClick={closeMenu}>
            Travel
          </NavLink>

          <NavLink to="/research" onClick={closeMenu}>
            Research
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;