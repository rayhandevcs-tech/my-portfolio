import { Link } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";
import { siteConfig } from "../../../../data/site";
import "./ContactSection.css";

const iconMap = { Mail, Github, Linkedin };

function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section className="contact-home" id="contact">
      <div className="container">

        <p className="contact-home__eyebrow">{contact.eyebrow}</p>
        <h2 className="contact-home__title">{contact.title}</h2>
        <p className="contact-home__description">{contact.description}</p>

        <div className="contact-home__grid">
          {contact.cards.map((item) => {
            const Icon = iconMap[item.iconName];
            const href =
              item.hrefKey === "email"
                ? `mailto:${siteConfig.email}`
                : siteConfig[item.hrefKey];

            return (
              <div key={item.title} className="contact-info-card">
                <div className="contact-info-card__icon">
                  {Icon && <Icon size={18} strokeWidth={2} />}
                </div>
                <h3 className="contact-info-card__title">{item.title}</h3>
                <p className="contact-info-card__desc">{item.desc}</p>
                <a
                  href={href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="contact-info-card__link"
                >
                  {item.label}
                </a>
              </div>
            );
          })}
        </div>

        <div className="contact-home__actions">
          <Link to={contact.cta.to} className="contact-home__cta btn btn--primary">
            {contact.cta.label}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
