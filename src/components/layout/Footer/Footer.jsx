import { Link } from "react-router-dom";
import { siteConfig } from "../../../data/site";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

function Footer() {
  const quickLinks = siteConfig.navLinks.filter((link) =>
    ["/", "/blog", "/book-reviews", "/achievements", "/contact"].includes(
      link.path
    )
  );

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3 className="footer__logo">
            {siteConfig.brand || siteConfig.name}
          </h3>

          <p className="footer__description">
            A personal website for projects, writing, book reviews,
            achievements, and future research-oriented work.
          </p>
        </div>

        <div className="footer__column">
          <h4>Navigation</h4>
          <div className="footer__links">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h4>Connect</h4>
          <div className="footer__links footer__links--icons">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={16} strokeWidth={2.1} />
              <span>Email</span>
            </a>

            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Github size={16} strokeWidth={2.1} />
              <span>GitHub</span>
            </a>

            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} strokeWidth={2.1} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="footer__bottom-note">Built with React & modern CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;