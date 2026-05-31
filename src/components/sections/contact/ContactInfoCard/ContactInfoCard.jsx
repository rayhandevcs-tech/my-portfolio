function ContactInfoCard({ icon, title, description, href, label, external = false }) {
  return (
    <a
      className="contact-info-card"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="contact-info-card__icon">{icon}</span>
      <div className="contact-info-card__content">
        <span className="contact-info-card__title">{title}</span>
        <span className="contact-info-card__label">{label}</span>
      </div>
      <svg className="contact-info-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </a>
  );
}

export default ContactInfoCard;