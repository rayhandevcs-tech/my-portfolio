import { Link } from "react-router-dom";
import Tag from "../../common/Tag";

import "./FeaturedProject.css";

function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <article className="featured-project card">
      <div className="featured-project__grid">
        {project.image && (
          <div className="featured-project__image">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <div className="featured-project__content">
          <p className="eyebrow">Featured Project</p>

          {project.category && (
            <p className="featured-project__category">{project.category}</p>
          )}

          <h3>{project.title}</h3>

          {(project.role || project.duration) && (
            <p className="featured-project__meta">
              {project.role}
              {project.role && project.duration ? " • " : ""}
              {project.duration}
            </p>
          )}

          <p className="featured-project__description">{project.description}</p>

          {project.highlight && (
            <p className="featured-project__highlight">{project.highlight}</p>
          )}

          {project.tech?.length > 0 && (
            <div className="tags-wrap">
              {project.tech.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          )}

          <div className="featured-project__links">
            <Link to={`/projects/${project.slug}`} className="btn">
              View Details
            </Link>

            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--secondary">
                GitHub
              </a>
            )}

            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn--secondary">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProject;