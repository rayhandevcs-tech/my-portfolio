import { Link } from "react-router-dom";
import { useProjects } from "../../hooks/useProjects";
import { optimizeCloudinaryImage } from "../../utils/optimizeCloudinaryImage";
import Tag from "../../components/common/Tag/Tag";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import "./Projects.css";

function Projects() {
  const { projects } = useProjects();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Seo
        title="Projects | RayhanDev"
        description="A collection of projects built by Rayhan — full-stack web apps, academic projects, and more."
        url="https://rayhancsdev.vercel.app/projects"
      />

      <main className="projects-page">
        <PageHero
          eyebrow="Projects"
          title="Things I've Built"
          description="A selection of projects that reflect my learning journey and growing interest in building scalable web experiences."
        />

        <div className="container projects-page__body">

          {featured.length > 0 && (
            <section className="projects-page__group">
              <h2 className="projects-page__group-title">Featured Projects</h2>
              <div className="projects-page__grid">
                {featured.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {others.length > 0 && (
            <section className="projects-page__group">
              <h2 className="projects-page__group-title">Other Projects</h2>
              <div className="projects-page__grid projects-page__grid--small">
                {others.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {projects.length === 0 && (
            <p className="projects-page__empty">No projects yet. Check back soon.</p>
          )}
        </div>
      </main>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
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
            {project.tech.slice(0, 4).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            {project.tech.length > 4 && (
              <span className="project-card__more-tags">+{project.tech.length - 4} more</span>
            )}
          </div>
        )}

        <div className="project-card__links">
          <Link to={`/projects/${project.slug}`} className="project-card__link-primary">
            View Details →
          </Link>
          {project.github && project.github !== "https://github.com/" && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link-secondary">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="project-card__link-secondary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;