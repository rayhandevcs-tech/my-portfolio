import "./AboutSection.css";
import aboutImage from "../../../../assets/images/hero_pic.png";
import {
  GraduationCap,
  Code2,
  Users,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Background",
    text: "Building a strong foundation in programming, logic, and core computer science concepts.",
  },
  {
    icon: Code2,
    title: "Frontend Focus",
    text: "Creating clean, responsive interfaces with React, JavaScript, HTML, CSS, and modern UI practices.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    text: "I enjoy breaking down problems and turning ideas into simple, practical solutions.",
  },
  {
    icon: Users,
    title: "Team Mindset",
    text: "Comfortable with communication, teamwork, and leadership in academic or project environments.",
  },
];

function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__wrap">
          <div className="about__media">
            <div className="about__image-card">
              <img src={aboutImage} alt="Rayhan" className="about__img" />

              <div className="about__badge">
                <span>Frontend</span>
                <strong>CS Student</strong>
              </div>
            </div>
          </div>

          <div className="about__content">
            <p className="about__eyebrow">About Me</p>

            <h2 className="about__title">
              I build clean interfaces with a strong CS foundation.
            </h2>

            <p className="about__text">
              I'm Rayhan, a Computer Science student and frontend developer
              focused on building responsive, user-friendly, and polished web
              interfaces. Alongside frontend development, I’m strengthening my
              programming skills with C++, Java, C#, SQL, JavaScript, and React.
            </p>

            <div className="about__highlights">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="about__highlight" key={item.title}>
                    <div className="about__highlight-icon">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;