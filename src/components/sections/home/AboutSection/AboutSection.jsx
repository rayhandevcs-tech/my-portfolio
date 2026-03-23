import "./AboutSection.css";
import aboutImage from "../../../../assets/images/hero_pic.png";
import { MonitorSmartphone, LayoutTemplate, Sparkles } from "lucide-react";

function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__wrap">
          <div className="about__media">
            <div className="about__image-wrap">
              <img src={aboutImage} alt="Rayhan" className="about__img" />
            </div>
          </div>

          <div className="about__content">
            <p className="about__eyebrow">About Me</p>

            <h2 className="about__title">
              Frontend developer and CS student.
            </h2>

            <p className="about__text">
              I'm Rayhan, Computer Science student focused on building clean, responsive, and user-friendly web interfaces.
            </p>

            <div className="about__highlights">
              <article className="about__highlight">
                <div className="about__highlight-icon">
                  <LayoutTemplate size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h3>Structured UI</h3>
                  <p>Clear, balanced, easy to scan.</p>
                </div>
              </article>

              <article className="about__highlight">
                <div className="about__highlight-icon">
                  <MonitorSmartphone size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h3>Responsive Build</h3>
                  <p>Smooth across desktop and mobile.</p>
                </div>
              </article>

              <article className="about__highlight">
                <div className="about__highlight-icon">
                  <Sparkles size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h3>Polished Details</h3>
                  <p>Clean code and refined interface.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;