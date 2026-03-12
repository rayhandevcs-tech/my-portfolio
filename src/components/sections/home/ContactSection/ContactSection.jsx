import "./ContactSection.css";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import ContactInfoCard from "../../contact/ContactInfoCard/ContactInfoCard";
import { siteConfig } from "../../../../data/site";

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
      </div>
    </section>
  );
}

export default ContactSection;