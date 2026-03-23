import { Link } from "react-router-dom";
import { siteConfig } from "../../../../data/site";
import heroImage from "../../../../assets/images/profile_pic.png";
import "./HeroSection.css";

function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="hero section">
      <div className="container hero__grid">

        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__heading">
            {hero.heading} <span className="hero__name">{hero.name}</span>
          </h1>

          <p className="page-intro hero__text">
            {hero.description}
          </p>

          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn">
              {hero.primaryCta.label}
            </a>

            <Link to={hero.secondaryCta.to} className="btn hero__btn-outline">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image">
            <img src={heroImage} alt={hero.name} className="hero__img" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;