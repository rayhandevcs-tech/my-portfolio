function ContactIntro({ title, description, eyebrow }) {
  return (
    <div className="contact-intro">
      {eyebrow && <p className="contact-intro__eyebrow">{eyebrow}</p>}
      <h2 className="contact-intro__title">{title}</h2>
      <p className="contact-intro__description">{description}</p>
    </div>
  );
}

export default ContactIntro;