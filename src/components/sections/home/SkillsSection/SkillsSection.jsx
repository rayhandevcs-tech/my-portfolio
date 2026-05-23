import "./SkillsSection.css";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import { skills, techSkills, professionalSkills } from "../../../../data/skills";

import {
  Code2,
  LayoutTemplate,
  Braces,
  GitBranch,
  Users,
  Lightbulb,
} from "lucide-react";

const skillIcons = {
  1: Code2,
  2: LayoutTemplate,
  3: Braces,
  4: GitBranch,
  5: Lightbulb,
  6: Users,
};

function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="Technical strengths with a frontend focus"
          intro="I combine frontend development, programming fundamentals, and communication skills to build clean, responsive, and practical web experiences."
        />

        <div className="card-grid skills-grid">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.id] || Code2;

            return (
              <article className="card skill-card" key={skill.id}>
                <span className="skill-card__accent" />

                <div className="skill-card__icon">
                  <Icon size={20} strokeWidth={2.3} />
                </div>

                <div className="skill-card__content">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-showcase">
          <div className="skills-panel">
            <div className="skills-panel__header">
              <span>01</span>
              <h3>Technical Skills</h3>
            </div>

            <div className="skills-tags">
              {techSkills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-panel skills-panel--dark">
            <div className="skills-panel__header">
              <span>02</span>
              <h3>Professional Skills</h3>
            </div>

            <div className="skills-tags">
              {professionalSkills.map((skill) => (
                <span className="skill-tag skill-tag--light" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;