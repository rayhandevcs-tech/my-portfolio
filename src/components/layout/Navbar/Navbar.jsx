import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { siteConfig } from "../../../data/site";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";
import { clearAuth, isAuthenticated } from "../../../utils/auth";
import { prefetchBlogPosts } from "../../../hooks/useBlogPosts";
import { prefetchBookReviews } from "../../../hooks/useBookReviews";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  function handleLogout() {
    clearAuth();
    navigate("/admin/login");
  }

  function handlePrefetch(path) {
    if (path === "/blog") {
      prefetchBlogPosts().catch(() => {});
    }

    if (path === "/book-reviews") {
      prefetchBookReviews().catch(() => {});
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className="logo__text">Rayhan</span>
          <span className="logo__accent">Dev</span>
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
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              onMouseEnter={() => handlePrefetch(link.path)}
              onFocus={() => handlePrefetch(link.path)}
            >
              {link.label}
            </NavLink>
          ))}

          {loggedIn && (
            <>
              <NavLink to="/admin/dashboard" onClick={closeMenu}>
                Admin
              </NavLink>

              <button
                type="button"
                className="navbar__logout"
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;