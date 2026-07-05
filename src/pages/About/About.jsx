import { GraduationCap, Code2, Lightbulb, Users, BookOpen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo/Seo";
import heroImage from "../../assets/images/profile_pic.png";
import "./About.css";

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Background",
    text: "Studying Computer Science at American International University-Bangladesh (AIUB), building a strong foundation in algorithms, data structures, and software engineering.",
  },
  {
    icon: Code2,
    title: "Frontend Focus",
    text: "Creating clean, responsive interfaces with React, JavaScript, and modern CSS. I care about both the visual polish and the underlying code quality.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    text: "I enjoy breaking down complex problems into simple, practical solutions — whether it's an algorithmic challenge or a tricky UI interaction.",
  },
  {
    icon: Users,
    title: "Team Mindset",
    text: "Comfortable with collaboration, communication, and leadership in team environments — from academic projects to community initiatives.",
  },
];

const interests = [
  { icon: BookOpen, label: "Book Reading" },
  { icon: MapPin, label: "Travel" },
  { icon: Code2, label: "Open Source" },
  { icon: Users, label: "Community" },
];

const stack = [
  "React", "JavaScript", "Node.js", "Express.js",
  "MongoDB", "C++", "Java", "C#", "SQL", "Tailwind CSS",
];

function About() {
  return (
    <>
      <Seo
        title="About | RayhanDev"
        description="Learn more about Rayhan — a CS student and frontend developer from AIUB, passionate about building clean web interfaces and solving real problems."
        url="https://rayhancsdev.vercel.app/about"
      />

      <main className="about-page">

        {/* Hero */}
        <section className="about-hero section">
          <div className="container about-hero__inner">
            <div className="about-hero__text">
              <p className="about-hero__eyebrow">About Me</p>
              <h1 className="about-hero__title">
                Building clean interfaces with a <span className="about-hero__highlight">strong CS foundation</span>
              </h1>
              <p className="about-hero__desc">
                I'm Rayhan, a Computer Science student at AIUB and a frontend developer focused on building responsive, user-friendly web experiences. I'm working toward becoming a Software Engineer — someone who not only writes good code but understands the systems behind it.
              </p>
              <p className="about-hero__desc">
                Alongside frontend work, I'm strengthening my foundation in C++, Java, SQL, and algorithms — while staying curious about leadership, books, and community.
              </p>
              <div className="about-hero__ctas">
                <Link to="/projects" className="about-hero__btn-primary">View Projects</Link>
                <Link to="/contact" className="about-hero__btn-secondary">Get in Touch</Link>
              </div>
            </div>

            <div className="about-hero__photo-wrap">
              <div className="about-hero__photo-ring">
                <img src={heroImage} alt="Rayhan" className="about-hero__photo" />
              </div>
              <div className="about-hero__badge">
                <span className="about-hero__badge-dot" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="about-highlights section">
          <div className="container">
            <p className="about-section__eyebrow">What I bring</p>
            <h2 className="about-section__title">A bit about how I work</h2>
            <div className="about-highlights__grid">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="about-highlight-card">
                    <div className="about-highlight-card__icon">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="about-highlight-card__title">{item.title}</h3>
                    <p className="about-highlight-card__text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="about-stack section">
          <div className="container">
            <p className="about-section__eyebrow">Tech Stack</p>
            <h2 className="about-section__title">Technologies I work with</h2>
            <div className="about-stack__chips">
              {stack.map((tech) => (
                <span key={tech} className="about-stack__chip">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className="about-interests section">
          <div className="container">
            <p className="about-section__eyebrow">Beyond Code</p>
            <h2 className="about-section__title">Things I care about</h2>
            <div className="about-interests__grid">
              {interests.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="about-interest-card">
                    <Icon size={22} strokeWidth={1.8} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta section">
          <div className="container">
            <div className="about-cta__box">
              <h2 className="about-cta__title">Let's work together</h2>
              <p className="about-cta__desc">
                I'm currently open to internship, freelance, and collaborative opportunities.
              </p>
              <div className="about-cta__actions">
                <Link to="/contact" className="about-hero__btn-primary">Send a Message</Link>
                <a href="/MD.Rayhan_Resume.pdf" download className="about-hero__btn-secondary">Download CV</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default About;