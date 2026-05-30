import { Link } from "react-router-dom";
import { useProjects } from "../../../../hooks/useProjects";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import Tag from "../../../common/Tag/Tag";
import "./ProjectsSection.css";

function ProjectsSection() {
  const { projects } = useProjects();

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects
    .filter((p) => p.id !== featuredProject?.id)
    .slice(0, 2);

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* Header */}
        <p className="projects-section__eyebrow">Projects</p>
        <h2 className="projects-section__title">Things I've Built</h2>
        <p className="projects-section__description">
          A selection of projects that reflect my learning journey and growing interest in building scalable web experiences.
        </p>

        {/* Featured project */}
        {featuredProject && (
          <div className="featured-project">
            {featuredProject.image && (
              <div className="featured-project__image-wrap">
                <img
                  src={optimizeCloudinaryImage(featuredProject.image, 700)}
                  alt={featuredProject.title}
                  className="featured-project__image"
                />
              </div>
            )}
            <div className="featured-project__body">
              <div className="featured-project__badges">
                <span className="featured-project__badge featured-project__badge--featured">Featured</span>
                {featuredProject.category && (
                  <span className="featured-project__badge featured-project__badge--category">
                    {featuredProject.category}
                  </span>
                )}
              </div>

              <h3 className="featured-project__heading">{featuredProject.title}</h3>

              {(featuredProject.role || featuredProject.duration) && (
                <p className="featured-project__meta">
                  {featuredProject.role}
                  {featuredProject.role && featuredProject.duration ? " • " : ""}
                  {featuredProject.duration}
                </p>
              )}

              <p className="featured-project__desc">{featuredProject.description}</p>

              {featuredProject.highlight && (
                <p className="featured-project__highlight">{featuredProject.highlight}</p>
              )}

              {featuredProject.tech?.length > 0 && (
                <div className="tags-wrap featured-project__tags">
                  {featuredProject.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              )}

              <div className="featured-project__actions">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="featured-project__btn featured-project__btn--primary"
                >
                  View Details
                </Link>
                {featuredProject.github && (
                  <a href={featuredProject.github} target="_blank" rel="noreferrer"
                    className="featured-project__btn featured-project__btn--outline">
                    GitHub
                  </a>
                )}
                {featuredProject.live && (
                  <a href={featuredProject.live} target="_blank" rel="noreferrer"
                    className="featured-project__btn featured-project__btn--outline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="projects-section__grid">
            {otherProjects.map((project) => (
              <article key={project.id} className="project-card">
                {project.image && (
                  <div className="project-card__image-wrap">
                    <img
                      src={optimizeCloudinaryImage(project.image, 700)}
                      alt={project.title}
                      loading="lazy"
                      className="project-card__image"
                    />
                  </div>
                )}
                <div className="project-card__body">
                  <div className="project-card__top">
                    <div>
                      {project.category && (
                        <p className="project-card__category">{project.category}</p>
                      )}
                      <h3 className="project-card__title">{project.title}</h3>
                    </div>
                    {project.status && (
                      <span className="project-card__status">{project.status}</span>
                    )}
                  </div>

                  <p className="project-card__desc">{project.description}</p>

                  {project.tech?.length > 0 && (
                    <div className="tags-wrap project-card__tags">
                      {project.tech.slice(0, 4).map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  )}

                  <div className="project-card__links">
                    <Link to={`/projects/${project.slug}`} className="project-card__link-primary">
                      View Details →
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="project-card__link-secondary">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View all */}
        <div className="projects-section__footer">
          <Link to="/projects" className="projects-section__view-all">
            View all projects →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
