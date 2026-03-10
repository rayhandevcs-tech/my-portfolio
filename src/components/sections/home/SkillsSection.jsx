import "./SkillsSection.css";
import { skills } from "../../../data/skills";

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2>What I Do</h2>
        <p className="page-intro">
          My current skill set is focused on frontend development, modern React
          workflow and building clean user experiences.
        </p>

        <div className="card-grid">
          {skills.map((skill) => (
            <article className="card skill-card" key={skill.id}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;