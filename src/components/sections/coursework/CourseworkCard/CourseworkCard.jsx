import "./CourseworkCard.css";

function CourseworkCard({
  image,
  title,
  description,
  category,
  status,
  term,
  learnings = [],
  tools = [],
  projects = [],
  onViewDetails,
}) {
  return (
    <article className="coursework-card">
      {image && (
        <div className="coursework-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="coursework-card__body">
        <div className="coursework-card__meta">
          <span className="coursework-card__badge coursework-card__badge--category">
            {category}
          </span>
          <span className="coursework-card__badge coursework-card__badge--status">
            {status}
          </span>
        </div>

        <h3 className="coursework-card__title">{title}</h3>

        <p className="coursework-card__description">{description}</p>

        {learnings.length > 0 && (
          <div className="coursework-card__topics">
            <h4>What I Learned</h4>
            <ul>
              {learnings.slice(0, 3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {tools.length > 0 && (
          <div className="coursework-card__tools">
            <h4>Tools</h4>
            <div>
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="coursework-card__tool-badge"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="coursework-card__projects">
            <h4>Related Projects</h4>
            {projects.slice(0, 2).map((project, index) => (
              <p
                key={index}
                className="coursework-card__project-link"
              >
                {project}
              </p>
            ))}
          </div>
        )}

        <div className="coursework-card__footer">
          <p className="coursework-card__term">{term}</p>

          {onViewDetails && (
            <button
              type="button"
              className="coursework-card__action"
              onClick={onViewDetails}
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default CourseworkCard;