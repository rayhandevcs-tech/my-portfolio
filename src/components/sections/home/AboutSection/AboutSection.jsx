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
            <p className="about__eyebrow">About</p>

            <h2 className="about__title">
              Building frontend interfaces with clarity and care.
            </h2>

            <p className="about__text">
              I focus on creating responsive and user-friendly web interfaces
              that feel clean, structured, and easy to use. My approach is
              centered on thoughtful layout, consistent styling, and practical
              frontend implementation with React and modern CSS.
            </p>

            <div className="about__highlights">
              <article className="about__highlight">
                <div className="about__highlight-icon">
                  <LayoutTemplate size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h3>Structured UI</h3>
                  <p>
                    Clear layouts, balanced spacing, and consistent visual
                    hierarchy.
                  </p>
                </div>
              </article>

              <article className="about__highlight">
                <div className="about__highlight-icon">
                  <MonitorSmartphone size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h3>Responsive Build</h3>
                  <p>
                    Interfaces that adapt smoothly across desktop, tablet, and
                    mobile.
                  </p>
                </div>
              </article>

              <article className="about__highlight">
                <div className="about__highlight-icon">
                  <Sparkles size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h3>Polished Details</h3>
                  <p>
                    Focused on usability, refinement, and clean implementation.
                  </p>
                </div>
              </article>
            </div>

            <div className="about__actions">
              <a href="#contact" className="about__link">
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;