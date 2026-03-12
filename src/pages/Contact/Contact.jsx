import { useState } from "react";
import "./Contact.css";
import PageHero from "../../components/common/PageHero/PageHero";
import ContactIntro from "../../components/sections/contact/ContactIntro/ContactIntro";
import ContactInfoCard from "../../components/sections/contact/ContactInfoCard/ContactInfoCard";
import { submitContactMessage } from "../../services/api/contactApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    try {
      setIsSubmitting(true);

      await submitContactMessage(formData);

      setSuccessMessage("Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <PageHero
        title="Contact Me"
        subtitle="Have a project idea, collaboration opportunity, or just want to say hello? Send me a message."
      />

      <section className="contact-content">
        <ContactIntro
          title="Let’s connect"
          description="You can reach out using the form below or through the contact links."
        />

        <div className="contact-info-grid">
          <ContactInfoCard
            title="Email"
            value="yourmail@example.com"
            href="mailto:yourmail@example.com"
          />
          <ContactInfoCard
            title="GitHub"
            value="github.com/yourusername"
            href="https://github.com/yourusername"
          />
          <ContactInfoCard
            title="LinkedIn"
            value="linkedin.com/in/yourusername"
            href="https://linkedin.com/in/yourusername"
          />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {successMessage && <p className="contact-success">{successMessage}</p>}
          {errorMessage && <p className="contact-error">{errorMessage}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;