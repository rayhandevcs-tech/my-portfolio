import Seo from "../../components/common/Seo/Seo";
import ContactIntro from "../../components/sections/contact/ContactIntro/ContactIntro";
import ContactInfoGrid from "../../components/sections/contact/ContactInfoGrid/ContactInfoGrid";
import ContactForm from "../../components/sections/contact/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Seo
        title="Contact | RayhanDev"
        description="Get in touch with Rayhan for collaboration, project discussion, or development opportunities."
      />

      <main className="contact-page">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-left">
              <ContactIntro
                eyebrow="Contact"
                title="Let's make something great together"
                description="Feel free to reach out for collaboration, project discussion, freelance opportunities, or a meaningful conversation."
              />
              <ContactInfoGrid className="contact-link-list" />
              <div className="contact-avail">
                <span className="contact-avail__dot" />
                Available for new projects
              </div>
            </div>

            <div className="contact-right">
              <div className="contact-form-wrapper">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;