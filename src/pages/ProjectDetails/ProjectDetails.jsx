import { Link, useParams } from "react-router-dom";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import Tag from "../../components/common/Tag/Tag";
import { useProject } from "../../hooks/useProject";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();
  const { project, notFound } = useProject(slug);

  if (notFound) {
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
    <main className="project-details-page">
      <div className="container">

        <Link to="/" className="project-details__back">
          ← Back to Home
        </Link>

        {/* Hero block */}
        <div className="project-details__hero">
          <div className="project-details__hero-body">
            <div className="project-details__badges">
              {project.category && (
                <span className="project-details__badge project-details__badge--category">
                  {project.category}
                </span>
              )}
              {project.status && (
                <span className="project-details__badge project-details__badge--status">
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="project-details__title">{project.title}</h1>

            <div className="project-details__meta">
              {project.role && <span>{project.role}</span>}
              {project.role && project.duration && (
                <span className="project-details__meta-dot">•</span>
              )}
              {project.duration && <span>{project.duration}</span>}
            </div>
          </div>

          {project.image && (
            <div className="project-details__image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
        </div>

        {/* Quick links bar */}
        {(project.github || project.live) && (
          <div className="project-details__links-bar">
            <span className="project-details__links-bar-label">Project Links</span>
            <div className="project-details__links-bar-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-details__link-btn project-details__link-btn--outline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-details__link-btn project-details__link-btn--primary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}

        {/* Content: main + sidebar */}
        <div className="project-details__content">

          {/* Main column */}
          <div className="project-details__main">

            <div className="project-details__section">
              <p className="project-details__section-label">Overview</p>
              <p>{project.description}</p>
            </div>

            {project.highlight && (
              <div className="project-details__section">
                <p className="project-details__section-label">Key Focus</p>
                <p className="project-details__highlight">{project.highlight}</p>
              </div>
            )}

            {project.problem && (
              <div className="project-details__section">
                <p className="project-details__section-label">Problem</p>
                <p>{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="project-details__section">
                <p className="project-details__section-label">Solution</p>
                <p>{project.solution}</p>
              </div>
            )}

            {project.features?.length > 0 && (
              <div className="project-details__section">
                <p className="project-details__section-label">Key Features</p>
                <ul className="project-details__list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="project-details__sidebar">

            {project.tech?.length > 0 && (
              <div className="project-details__section">
                <p className="project-details__section-label">Tech Stack</p>
                <div className="project-details__tags">
                  {project.tech.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            )}

            {(project.role || project.duration || project.status) && (
              <div className="project-details__section">
                <p className="project-details__section-label">Project Info</p>
                <div style={{ display: "grid", gap: "12px" }}>
                  {project.role && (
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", marginBottom: "2px" }}>Role</p>
                      <p style={{ fontSize: "14px", color: "var(--heading)", fontWeight: 500, margin: 0 }}>{project.role}</p>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", marginBottom: "2px" }}>Duration</p>
                      <p style={{ fontSize: "14px", color: "var(--heading)", fontWeight: 500, margin: 0 }}>{project.duration}</p>
                    </div>
                  )}
                  {project.status && (
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", marginBottom: "2px" }}>Status</p>
                      <p style={{ fontSize: "14px", color: "var(--primary)", fontWeight: 600, margin: 0 }}>{project.status}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </main>
  );
}

export default ProjectDetails;
