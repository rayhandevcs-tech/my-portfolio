function ProjectMeta({ role, duration, status }) {
  if (!role && !duration && !status) return null;

  return (
    <div className="project-details__meta">
      {role && <span>{role}</span>}
      {role && duration && <span>•</span>}
      {duration && <span>{duration}</span>}
      {(role || duration) && status && <span>•</span>}
      {status && <span>{status}</span>}
    </div>
  );
}

export default ProjectMeta;