import { siteConfig } from "../../data/site";
import ContactIntro from "../../components/sections/contact/ContactIntro/ContactIntro";
import ContactInfoCard from "../../components/sections/contact/ContactInfoCard/ContactInfoCard";
import "./Contact.css";

function Contact() {
  return (
    <main className="section contact-page">
      <div className="container">
        <ContactIntro />

        <div className="contact-home__grid">
          <ContactInfoCard
            icon="✉"
            title="Email"
            description="The best way to reach me for collaboration, feedback, or meaningful conversation."
            href={`mailto:${siteConfig.email}`}
            label={siteConfig.email}
          />

          <ContactInfoCard
            icon="⌘"
            title="GitHub"
            description="Explore my code, practice projects, and the structure behind what I am building."
            href={siteConfig.github}
            label="Visit GitHub"
            external
          />

          <ContactInfoCard
            icon="in"
            title="LinkedIn"
            description="Connect with me professionally and follow my learning and project journey."
            href={siteConfig.linkedin}
            label="Connect on LinkedIn"
            external
          />
        </div>

        <div className="contact-home__note">
          <p>
            I’m especially interested in frontend development, scalable UI
            systems, and projects that help me grow through building.
          </p>
        </div>

        <section className="card" style={{ marginTop: "2rem" }}>
          <h2 style={{ marginBottom: "0.75rem" }}>Future Contact Form</h2>
          <p>
            This section is reserved for backend integration. Later, this will
            connect to a real contact form API using the contact service layer.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Contact;