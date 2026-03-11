function EmptyState({ title = "Nothing here yet", text = "Content will be added soon." }) {
  return (
    <div className="empty-state card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default EmptyState;