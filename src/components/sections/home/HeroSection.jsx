import "./HeroSection.css";
import { siteConfig } from "../../../data/site";
import heroImage from "../../../assets/images/profile_pic.png";

function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Frontend Developer</p>
          <h1>Hey, I'm {siteConfig.name}</h1>
          <p className="page-intro hero__text">
            I build clean, responsive and user-friendly web applications. This
            website is my personal space for projects, writing, book reviews,
            achievements and future research work.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="/blog" className="btn hero__btn-outline">
              Read Blog
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt={siteConfig.name} className="hero__img" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;