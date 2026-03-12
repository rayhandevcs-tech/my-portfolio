function ContactInfoCard({ title, value, href }) {
  return (
    <article className="contact-info-card">
      <h3>{title}</h3>
      <a href={href} target="_blank" rel="noreferrer">
        {value}
      </a>
    </article>
  );
}

export default ContactInfoCard;