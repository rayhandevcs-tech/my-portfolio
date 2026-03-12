import { Link } from "react-router-dom";

import "./ProjectsSection.css";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
import Tag from "../../../common/Tag/Tag";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import { useProjects } from "../../../../hooks/useProjects";

function ProjectsSection() {
  const { projects } = useProjects();

  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter(
    (project) => project.id !== featuredProject?.id
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Things I’ve Built"
          intro="A selection of projects that reflect my learning journey, practical experimentation, and growing interest in building scalable web experiences."
        />

        <FeaturedProject project={featuredProject} />

        {otherProjects.length > 0 && (
          <div className="card-grid">
            {otherProjects.map((project) => (
              <article className="card project-card" key={project.id}>
                {project.image && (
                  <div className="project-card__image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}

                <div className="project-card__body">
                  <div className="project-card__top">
                    <div className="project-card__heading">
                      {project.category && (
                        <p className="project-card__category">
                          {project.category}
                        </p>
                      )}

                      <h3>{project.title}</h3>

                      {(project.role || project.duration) && (
                        <p className="project-card__meta">
                          {project.role}
                          {project.role && project.duration ? " • " : ""}
                          {project.duration}
                        </p>
                      )}
                    </div>

                    <div className="project-card__badges">
                      {project.status && (
                        <span className="project-badge project-badge--status">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <p className="project-card__highlight">
                      {project.highlight}
                    </p>
                  )}

                  {project.tech?.length > 0 && (
                    <div className="tags-wrap">
                      {project.tech.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  )}

                  <div className="project-card__links">
                    <Link to={`/projects/${project.slug}`}>View Details</Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;