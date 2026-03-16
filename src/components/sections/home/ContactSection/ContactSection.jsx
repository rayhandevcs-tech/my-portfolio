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
          description="I’m open to collaboration, learning opportunities, and meaningful conversations around frontend development, projects, and growth."
        />

        <ContactInfoGrid />

        <Link to="/contact" className="btn contact-home__cta">
          Send a Message
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;