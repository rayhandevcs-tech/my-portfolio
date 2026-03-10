import "./ProjectsSection.css";
import { projects } from "../../../data/projects";

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2>Featured Projects</h2>
        <p className="page-intro">
          A few projects that reflect my learning journey and practical frontend
          development work.
        </p>

        <div className="card-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((item) => (
                  <span key={item} className="project-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;