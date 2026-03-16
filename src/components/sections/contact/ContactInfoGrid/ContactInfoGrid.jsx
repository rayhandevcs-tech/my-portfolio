import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import { siteConfig } from "../../../../data/site";

function ContactInfoGrid() {
  return (
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
  );
}

export default ContactInfoGrid;