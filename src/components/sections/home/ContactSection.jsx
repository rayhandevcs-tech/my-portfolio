import "./ContactSection.css";
import { siteConfig } from "../../../data/site";

function ContactSection() {
  return (
    <section className="section contact-home" id="contact">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2>Let’s Connect</h2>
        <p className="page-intro contact-home__text">
          If you want to collaborate, discuss a project, or simply connect,
          feel free to reach out through email or social platforms.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Email</h3>
            <p>{siteConfig.email}</p>
          </div>

          <div className="card">
            <h3>GitHub</h3>
            <p>{siteConfig.github}</p>
          </div>

          <div className="card">
            <h3>LinkedIn</h3>
            <p>{siteConfig.linkedin}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;