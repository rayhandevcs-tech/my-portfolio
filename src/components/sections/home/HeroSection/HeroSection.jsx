import { Link } from "react-router-dom";
import { siteConfig } from "../../../../data/site";
import heroImage from "../../../../assets/images/profile_pic.png";
import { Mail, Github, Linkedin } from "lucide-react";
import "./HeroSection.css";

const socialIcons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="hero-section" id="home">
      <div className="container hero-section__container">

        <div className="hero-section__top">

          <div className="hero-section__intro">
            <p className="hero-section__eyebrow">{hero.eyebrow}</p>

            <h1 className="hero-section__heading">
              {hero.heading}{" "}
              <span className="hero-section__heading-highlight">{hero.highlight}</span>
            </h1>

            <p className="hero-section__role">{hero.role}</p>

            <p className="hero-section__description">{hero.description}</p>

            {/* Chips */}
            {hero.chips?.length > 0 && (
              <div className="hero-section__chips">
                {hero.chips.map((chip) => (
                  <span key={chip} className="hero-section__chip">{chip}</span>
                ))}
              </div>
            )}

            {/* CTA buttons */}
            <div className="hero-section__ctas">
              <a href={hero.primaryCta.href} className="hero-section__cta-primary">
                {hero.primaryCta.label}
              </a>
              <Link to={hero.secondaryCta.to} className="hero-section__cta-secondary">
                {hero.secondaryCta.label}
              </Link>
            </div>

            {/* Social links */}
            {hero.socials?.length > 0 && (
              <div className="hero-section__socials">
                {hero.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="hero-section__social-link"
                    >
                      {Icon && <Icon size={14} strokeWidth={2} />}
                      {s.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Photo */}
          <div
            className="hero-section__photo-wrapper"
            style={{
              position: "relative",
              flexShrink: 0,
              padding: "4px",
              borderRadius: "17px",
              background: "linear-gradient(135deg, #0d9488, #0891b2, #2dd4bf)",
              boxShadow: "0 0 0 12px rgba(13, 148, 136, 0.08), 0 0 0 24px rgba(13, 148, 136, 0.04)",
            }}
          >
            <div
              className="hero-section__photo-frame"
              style={{
                width: "180px",
                height: "210px",
                borderRadius: "14px",
                overflow: "hidden",
                border: "none",
              }}
            >
              <img src={heroImage} alt={hero.name} className="hero-section__photo" />
            </div>
            <div className="hero-section__photo-badge">
              <span className="hero-section__photo-badge-highlight">Frontend Dev</span> · CS Student
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
