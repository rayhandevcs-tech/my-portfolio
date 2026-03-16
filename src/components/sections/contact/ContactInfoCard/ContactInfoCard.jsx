function ContactInfoCard({
  icon,
  title,
  description,
  href,
  label,
  external = false,
}) {
  return (
    <article className="contact-info-card">
      {icon && <span className="contact-info-card__icon">{icon}</span>}

      <h3>{title}</h3>

      {description && <p>{description}</p>}

      <a
        className="contact-info-card__link"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {label}
      </a>
    </article>
  );
}

export default ContactInfoCard;