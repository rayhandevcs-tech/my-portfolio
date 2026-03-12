function ProjectLinks({ github, live }) {
  if (!github && !live) return null;

  return (
    <div className="project-details__links">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="btn btn--secondary"
        >
          GitHub
        </a>
      )}

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Live Demo
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;