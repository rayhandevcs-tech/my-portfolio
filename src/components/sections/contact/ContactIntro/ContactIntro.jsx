function ContactIntro({ title, description, eyebrow }) {
  return (
    <div className="contact-intro">
      {eyebrow && <p className="contact-intro__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ContactIntro;