import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { siteConfig } from "../../../data/site";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          {siteConfig.brand}
        </Link>

        <div className="navbar__actions">
          <ThemeToggle />

          <button
            className={`nav-toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`nav ${menuOpen ? "nav--open" : ""}`}
        >
          {siteConfig.navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;