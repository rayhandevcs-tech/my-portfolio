import { useEffect } from "react";
import "./CourseDetailsModal.css";

function CourseDetailsModal({ course, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const {
    image,
    title,
    category,
    status,
    term,
    description,
    fullDescription,
    learnings = [],
    tools = [],
    projectLinks = [],
    resources = [],
  } = course;

  return (
    <div className="course-modal-backdrop" onClick={onClose}>
      <div
        className="course-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
      >
        <button
          type="button"
          className="course-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {image && (
          <div className="course-modal__image">
            <img src={image} alt={title} />
          </div>
        )}

        <div className="course-modal__content">
          <div className="course-modal__meta">
            <span className="course-modal__badge course-modal__badge--category">
              {category}
            </span>
            <span className="course-modal__badge course-modal__badge--status">
              {status}
            </span>
          </div>

          <h2 id="course-modal-title" className="course-modal__title">
            {title}
          </h2>

          {term && <p className="course-modal__term">{term}</p>}

          <p className="course-modal__description">
            {fullDescription || description}
          </p>

          {learnings.length > 0 && (
            <div className="course-modal__section">
              <h3>What I Learned</h3>
              <ul>
                {learnings.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {tools.length > 0 && (
            <div className="course-modal__section">
              <h3>Tools & Languages</h3>
              <div className="course-modal__tools">
                {tools.map((tool, index) => (
                  <span key={index} className="course-modal__tool">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {projectLinks.length > 0 && (
            <div className="course-modal__section">
              <h3>Related Projects</h3>
              <div className="course-modal__links">
                {projectLinks.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="course-modal__link"
                  >
                    {project.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {resources.length > 0 && (
            <div className="course-modal__section">
              <h3>Resources</h3>
              <ul>
                {resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsModal;