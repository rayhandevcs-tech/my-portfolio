import { siteConfig } from "../data/site";

function Contact() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1>Get In Touch</h1>
        <p className="page-intro">
          Whether you want to discuss a project, collaborate on an idea, or just
          connect, I’d be happy to hear from you. You can reach me through the
          platforms below.
        </p>

        <div className="card-grid">
          <article className="card">
            <h3>Email</h3>
            <p>
              Feel free to send me a message for collaboration, project ideas or
              general communication.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="contact-link">
              {siteConfig.email}
            </a>
          </article>

          <article className="card">
            <h3>GitHub</h3>
            <p>
              Explore my repositories, code experiments and project work on
              GitHub.
            </p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Visit GitHub Profile
            </a>
          </article>

          <article className="card">
            <h3>LinkedIn</h3>
            <p>
              Connect with me professionally and stay updated with my journey
              and work.
            </p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Visit LinkedIn Profile
            </a>
          </article>
        </div>

        <div className="contact-note-box">
          <h2>Let’s Build Something Meaningful</h2>
          <p className="page-intro">
            I am interested in web development, writing, research-oriented work
            and thoughtful digital projects. If your idea aligns with any of
            these areas, feel free to reach out.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;