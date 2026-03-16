import { useState } from "react";
import { submitContactMessage } from "../../../../services/api/contactApi";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactForm() {
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
    <section className="card contact-form-card">
      <h2 className="contact-form-card__title">Send a Message</h2>

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
          <label htmlFor="phone">Phone Number</label>
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

        <button
          type="submit"
          className="btn contact-submit-btn"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {successMessage && <p className="contact-success">{successMessage}</p>}
        {errorMessage && <p className="contact-error">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default ContactForm;