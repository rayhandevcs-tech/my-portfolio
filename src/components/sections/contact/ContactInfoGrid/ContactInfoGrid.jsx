import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import { siteConfig } from "../../../../data/site";
import { Mail, Github, Linkedin } from "lucide-react";

function ContactInfoGrid() {
  return (
    <div className="contact-home__grid">
      <ContactInfoCard
        icon={<Mail size={18} strokeWidth={2.2} />}
        title="Email"
        description="The best way to reach me for collaboration, project discussion, or thoughtful conversation."
        href={`mailto:${siteConfig.email}`}
        label={siteConfig.email}
      />

      <ContactInfoCard
        icon={<Github size={18} strokeWidth={2.2} />}
        title="GitHub"
        description="Explore my code, practice projects, and the structure behind what I’m building."
        href={siteConfig.github}
        label="Visit GitHub"
        external
      />

      <ContactInfoCard
        icon={<Linkedin size={18} strokeWidth={2.2} />}
        title="LinkedIn"
        description="Connect with me professionally and follow my learning, work, and project journey."
        href={siteConfig.linkedin}
        label="Connect on LinkedIn"
        external
      />
    </div>
  );
}

export default ContactInfoGrid;