import { Link } from "react-router-dom";
import { useProjects } from "../../../../hooks/useProjects";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import Tag from "../../../common/Tag/Tag";
import "./ProjectsSection.css";

function ProjectsSection() {
  const { projects } = useProjects();

  const displayProjects = projects.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* Header */}
        <p className="projects-section__eyebrow">Projects</p>
        <h2 className="projects-section__title">Things I've Built</h2>
        <p className="projects-section__description">
          A selection of projects that reflect my learning journey and growing interest in building scalable web experiences.
        </p>

        {/* Projects grid */}
        {displayProjects.length > 0 && (
          <div className="projects-section__grid">
            {displayProjects.map((project) => (
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
                      {(project.role || project.duration) && (
                        <p className="project-card__meta">
                          {project.role}
                          {project.role && project.duration ? " • " : ""}
                          {project.duration}
                        </p>
                      )}
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
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer"
                        className="project-card__link-secondary">
                        Live Demo
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
