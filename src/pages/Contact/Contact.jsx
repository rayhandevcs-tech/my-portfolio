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

      <main className="section contact-page">
        <div className="container">
          <ContactIntro
            title="Let’s Connect"
            description="Feel free to reach out for collaboration, project discussion, or meaningful conversation."
          />

          <ContactInfoGrid />

          <div className="contact-home__note">
            <p>
              I’m especially interested in frontend development, scalable UI
              systems, and projects that help me grow through building.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
    </>
  );
}

export default Contact;