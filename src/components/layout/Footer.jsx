import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3 className="footer__logo">
            {siteConfig.brand || siteConfig.name}
          </h3>
          <p>
            A personal website for projects, writing, book reviews, achievements
            and future research-oriented work.
          </p>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/book-reviews">Book Reviews</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer__column">
          <h4>Explore</h4>
          <div className="footer__links">
            <Link to="/travel">Travel</Link>
            <Link to="/research">Research</Link>
          </div>
        </div>

        <div className="footer__column">
          <h4>Connect</h4>
          <div className="footer__links">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;