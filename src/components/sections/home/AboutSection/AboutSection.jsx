import "./AboutSection.css";
import aboutImage from "../../../../assets/images/hero_pic.png";

function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__card">
          <div className="about__media">
            <div className="about__image-wrap">
              <img src={aboutImage} alt="Rayhan" className="about__img" />
            </div>

            <p className="about__role">Frontend Developer</p>
          </div>

          <div className="about__content">
            <p className="about__eyebrow">About</p>

            <h2 className="about__title">
              Building simple
  <br /> interfaces.
            </h2>

            <p className="about__text">
              I design and build modern frontend experiences that value clarity,
              responsiveness, and real usability.
            </p>

            <div className="about__meta">
              <span>React</span>
              <span>JavaScript</span>
              <span>Responsive UI</span>
            </div>

            <div className="about__actions">
              <a href="#contact" className="about__btn">
                Let’s Talk
              </a>

              <p className="about__note">
                Learning, building, and refining with consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;