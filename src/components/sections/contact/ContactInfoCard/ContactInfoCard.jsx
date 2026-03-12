function ContactInfoCard({
  icon,
  title,
  description,
  href,
  label,
  external = false,
}) {
  return (
    <article className="card contact-card">
      <div className="contact-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>

      <a
        href={href}
        className="contact-card__link"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {label}
      </a>
    </article>
  );
}

export default ContactInfoCard;