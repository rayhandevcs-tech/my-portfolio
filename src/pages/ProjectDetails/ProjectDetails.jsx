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
        </div>

        {/* Content: main + sidebar */}
        <div className="project-details__content">

          {/* Main column */}
          <div className="project-details__panel">

            <div className="project-details__block">
              <h2 className="project-details__heading">Overview</h2>
              <p className="project-details__text">{project.description}</p>
            </div>

            {project.highlight && (
              <div className="project-details__block">
                <h2 className="project-details__heading">Key Focus</h2>
                <div className="project-details__highlight">
                  <span className="project-details__highlight-icon" aria-hidden="true">✦</span>
                  <p>{project.highlight}</p>
                </div>
              </div>
            )}

            {project.problem && project.solution ? (
              <div className="project-details__block">
                <div className="project-details__pair">
                  <div className="project-details__pair-item">
                    <h2 className="project-details__heading">Problem</h2>
                    <p className="project-details__text">{project.problem}</p>
                  </div>
                  <div className="project-details__pair-item">
                    <h2 className="project-details__heading">Solution</h2>
                    <p className="project-details__text">{project.solution}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {project.problem && (
                  <div className="project-details__block">
                    <h2 className="project-details__heading">Problem</h2>
                    <p className="project-details__text">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="project-details__block">
                    <h2 className="project-details__heading">Solution</h2>
                    <p className="project-details__text">{project.solution}</p>
                  </div>
                )}
              </>
            )}

            {project.features?.length > 0 && (
              <div className="project-details__block">
                <h2 className="project-details__heading">Key Features</h2>
                <ul className="project-details__features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="project-details__check" aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="project-details__panel project-details__panel--sidebar">

            {project.tech?.length > 0 && (
              <div className="project-details__block">
                <h2 className="project-details__heading">Tech Stack</h2>
                <div className="project-details__tags">
                  {project.tech.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            )}

            {(project.role || project.duration || project.status) && (
              <div className="project-details__block">
                <h2 className="project-details__heading">Project Info</h2>
                <div className="project-details__info-grid">
                  {project.role && (
                    <div className="project-details__info-item">
                      <span className="project-details__info-label">Role</span>
                      <span className="project-details__info-value">{project.role}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="project-details__info-item">
                      <span className="project-details__info-label">Duration</span>
                      <span className="project-details__info-value">{project.duration}</span>
                    </div>
                  )}
                  {project.status && (
                    <div className="project-details__info-item">
                      <span className="project-details__info-label">Status</span>
                      <span className="project-details__info-value project-details__info-value--accent">{project.status}</span>
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
