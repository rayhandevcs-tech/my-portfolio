import "./SkillsSection.css";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import { skills } from "../../../../data/skills";

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="What I Do"
          intro="I enjoy building clean, responsive interfaces and continuously improving my frontend development skills through practice and structured projects."
        />

        <div className="card-grid skills-grid">
          {skills.map((skill) => (
            <article className="card skill-card" key={skill.id}>
              <div className="skill-card__icon">✦</div>

              <div className="skill-card__content">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;