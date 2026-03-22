import "./ContactSection.css";
import { Link } from "react-router-dom";
import ContactIntro from "../../contact/ContactIntro/ContactIntro";
import ContactInfoGrid from "../../contact/ContactInfoGrid/ContactInfoGrid";

function ContactSection() {
  return (
    <section className="section contact-home" id="contact">
      <div className="container">
        <ContactIntro
          eyebrow="Contact"
          title="Let’s Connect"
          description="I’m open to collaboration, learning opportunities, and thoughtful conversations around frontend development, projects, and growth."
        />

        <ContactInfoGrid />

        <div className="contact-home__actions">
          <Link to="/contact" className="btn contact-home__cta">
            Send a Message
          </Link>

          <p className="contact-home__subtext">
            Open to meaningful conversations, collaboration, and frontend-focused opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;