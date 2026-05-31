import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Send, ArrowRight } from "lucide-react";
import { siteConfig } from "../../../../data/site";
import "./ContactSection.css";

function ContactSection() {
  const { contact } = siteConfig;

  const chips = [
    {
      icon: <Mail size={15} strokeWidth={2} />,
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: <Github size={15} strokeWidth={2} />,
      label: "GitHub",
      href: siteConfig.github,
      external: true,
    },
    {
      icon: <Linkedin size={15} strokeWidth={2} />,
      label: "LinkedIn",
      href: siteConfig.linkedin,
      external: true,
    },
  ];

  return (
    <section className="contact-home" id="contact">
      <div className="container">
        <div className="contact-home__inner">

          {/* ── Left ── */}
          <div className="contact-home__left">
            <p className="contact-home__eyebrow">{contact.eyebrow}</p>
            <h2 className="contact-home__title">{contact.title}</h2>
            <p className="contact-home__description">{contact.description}</p>

            <div className="contact-home__chips">
              {chips.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  target={chip.external ? "_blank" : undefined}
                  rel={chip.external ? "noreferrer" : undefined}
                  className="contact-home__chip"
                >
                  {chip.icon}
                  {chip.label}
                </a>
              ))}
            </div>

            <div className="contact-home__actions">
              <Link to={contact.cta.to} className="contact-home__cta">
                <Send size={15} strokeWidth={2} />
                {contact.cta.label}
              </Link>
              <Link to="/contact" className="contact-home__cta-ghost">
                View all options
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </div>
          

          {/* ── Right ── */}
        <div className="contact-home__right">

          <div className="contact-home__stat">
            <div className="contact-home__stat-num">CSE</div>
            <div className="contact-home__stat-label">Computer Science & Engineering</div>
          </div>

          <div className="contact-home__stat">
            <div className="contact-home__stat-num">Dhaka</div>
            <div className="contact-home__stat-label">Bangladesh · GMT+6</div>
          </div>

          <div className="contact-home__tags">
            <span className="contact-home__tag">React</span>
            <span className="contact-home__tag">Node.js</span>
            <span className="contact-home__tag">C++</span>
            <span className="contact-home__tag">MongoDB</span>
          </div>

          <div className="contact-home__avail">
            <span className="contact-home__avail-dot" />
            Open to internship & freelance
          </div>

        </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
