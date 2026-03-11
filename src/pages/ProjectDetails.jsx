import { Link, useParams } from "react-router-dom";

import EmptyState from "../components/common/EmptyState";
import Tag from "../components/common/Tag";
import { projects } from "../data/projects";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <EmptyState
            title="Project not found"
            text="The project you are looking for does not exist."
          />
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <article className="project-details">
          <Link to="/" className="project-details__back">
            ← Back to Home
          </Link>

          <div className="project-details__header">
            <div>
              {project.category && (
                <p className="eyebrow">{project.category}</p>
              )}

              <h1>{project.title}</h1>

              <div className="project-details__meta">
                {project.role && <span>{project.role}</span>}
                {project.role && project.duration && <span>•</span>}
                {project.duration && <span>{project.duration}</span>}
                {(project.role || project.duration) && project.status && <span>•</span>}
                {project.status && <span>{project.status}</span>}
              </div>
            </div>
          </div>

          {project.image && (
            <div className="project-details__image">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          <div className="project-details__content">
            <section className="project-details__section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>

            {project.highlight && (
              <section className="project-details__section">
                <h2>Key Focus</h2>
                <p className="project-details__highlight">{project.highlight}</p>
              </section>
            )}

            {project.problem && (
              <section className="project-details__section">
                <h2>Problem</h2>
                <p>{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="project-details__section">
                <h2>Solution</h2>
                <p>{project.solution}</p>
              </section>
            )}

            {project.features?.length > 0 && (
              <section className="project-details__section">
                <h2>Key Features</h2>
                <ul className="project-details__list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.tech?.length > 0 && (
              <section className="project-details__section">
                <h2>Tech Stack</h2>
                <div className="tags-wrap">
                  {project.tech.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </section>
            )}

            <section className="project-details__section">
              <h2>Links</h2>
              <div className="project-details__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--secondary">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn">
                    Live Demo
                  </a>
                )}
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

export default ProjectDetails;