import "./ContactSection.css";
import SectionHeader from "../../common/SectionHeader";
import { siteConfig } from "../../../data/site";

function ContactSection() {
  return (
    <section className="section contact-home" id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s Connect"
          intro="I’m open to collaboration, learning opportunities, and meaningful conversations around frontend development, projects, and growth."
        />

        <div className="contact-home__grid">
          <article className="card contact-card">
            <div className="contact-card__icon">✉</div>
            <h3>Email</h3>
            <p>
              The best way to reach me for collaboration, feedback, or
              meaningful conversation.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="contact-card__link">
              {siteConfig.email}
            </a>
          </article>

          <article className="card contact-card">
            <div className="contact-card__icon">⌘</div>
            <h3>GitHub</h3>
            <p>
              Explore my code, practice projects, and the structure behind what
              I am building.
            </p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card__link"
            >
              Visit GitHub
            </a>
          </article>

          <article className="card contact-card">
            <div className="contact-card__icon">in</div>
            <h3>LinkedIn</h3>
            <p>
              Connect with me professionally and follow my learning and project
              journey.
            </p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card__link"
            >
              Connect on LinkedIn
            </a>
          </article>
        </div>

        <div className="contact-home__note">
          <p>
            I’m especially interested in frontend development, scalable UI
            systems, and projects that help me grow through building.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;