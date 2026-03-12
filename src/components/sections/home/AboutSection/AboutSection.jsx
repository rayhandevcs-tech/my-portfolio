import "./AboutSection.css";
import aboutImage from "../../../../assets/images/hero_pic.png";

function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__image-wrap">
          <div className="about__image">
            <img src={aboutImage} alt="About me" className="about__img" />
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">About Me</p>

          <h2>Building with curiosity and consistency</h2>

          <p>
            I am passionate about frontend development and enjoy turning ideas
            into clean, responsive, and user-friendly web interfaces. I like
            learning by building and improving projects step by step.
          </p>

          <p>
            Over time, I want to grow this website into more than a portfolio —
            a place for writing, reflection, research interests, reading notes,
            and meaningful work.
          </p>

          <div className="about__highlights">
            <span>Frontend Development</span>
            <span>Reusable Components</span>
            <span>Scalable Structure</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;