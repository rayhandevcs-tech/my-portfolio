import { useState } from "react";
import Seo from "../../components/common/Seo/Seo";

import { siteConfig } from "../../data/site";
import ContactIntro from "../../components/sections/contact/ContactIntro/ContactIntro";
import ContactInfoCard from "../../components/sections/contact/ContactInfoCard/ContactInfoCard";
import { submitContactMessage } from "../../services/api/contactApi";

import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateForm() {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim()) return "Message is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email.";

    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    try {
      setLoading(true);

      const response = await submitContactMessage(formData);

      setSuccessMessage(
        response.message || "Your message has been sent successfully."
      );
      setFormData(initialForm);
    } catch (error) {
      setErrorMessage(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Seo
        title="Contact | RayhanDev"
        description="Get in touch with Rayhan for collaboration, project discussion, or development opportunities."
        keywords="contact rayhan, developer contact, portfolio contact"
        url="http://localhost:5173/contact"
        type="website"
      />

      <main className="section contact-page">
        <div className="container">
          <ContactIntro />

          <div className="contact-home__grid">
            <ContactInfoCard
              icon="✉"
              title="Email"
              description="The best way to reach me for collaboration, feedback, or meaningful conversation."
              href={`mailto:${siteConfig.email}`}
              label={siteConfig.email}
            />

            <ContactInfoCard
              icon="⌘"
              title="GitHub"
              description="Explore my code, practice projects, and the structure behind what I am building."
              href={siteConfig.github}
              label="Visit GitHub"
              external
            />

            <ContactInfoCard
              icon="in"
              title="LinkedIn"
              description="Connect with me professionally and follow my learning and project journey."
              href={siteConfig.linkedin}
              label="Connect on LinkedIn"
              external
            />
          </div>

          <div className="contact-home__note">
            <p>
              I’m especially interested in frontend development, scalable UI
              systems, and projects that help me grow through building.
            </p>
          </div>

          <section
            className="card"
            style={{ marginTop: "2rem", padding: "1.5rem" }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Send a Message</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="phone">Phone Number (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+8801XXXXXXXXX"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />
              </div>

              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {successMessage && (
                <p style={{ color: "green", marginTop: "1rem" }}>
                  {successMessage}
                </p>
              )}

              {errorMessage && (
                <p style={{ color: "red", marginTop: "1rem" }}>
                  {errorMessage}
                </p>
              )}
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;