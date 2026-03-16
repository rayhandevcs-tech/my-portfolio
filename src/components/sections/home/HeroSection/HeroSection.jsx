import { Link } from "react-router-dom";

import { siteConfig } from "../../../../data/site";
import heroImage from "../../../../assets/images/profile_pic.png";

import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{siteConfig.hero.eyebrow}</p>

          <h1>
            Hey, I'm <span>{siteConfig.name}</span>
          </h1>

          <p className="page-intro hero__text">
            {siteConfig.hero.description}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <Link to="/blog" className="btn hero__btn-outline">
              Read Blog
            </Link>
          </div>

          
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image">
            <img src={heroImage} alt={siteConfig.name} className="hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;