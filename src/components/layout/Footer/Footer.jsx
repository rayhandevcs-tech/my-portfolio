import { Link } from "react-router-dom";
import { siteConfig } from "../../../data/site";
import "./Footer.css";

function Footer() {
  const quickLinks = siteConfig.navLinks.filter((link) =>
    ["/", "/blog", "/book-reviews", "/achievements", "/contact"].includes(
      link.path
    )
  );

  const exploreLinks = siteConfig.navLinks.filter((link) =>
    ["/travel", "/research"].includes(link.path)
  );

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3 className="footer__logo">
            {siteConfig.brand || siteConfig.name}
          </h3>
          <p>{siteConfig.footer?.description}</p>
        </div>

        <div className="footer__column">
          <h4>Quick Links</h4>
          <div className="footer__links">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h4>Explore</h4>
          <div className="footer__links">
            {exploreLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
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
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;