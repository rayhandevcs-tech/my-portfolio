function InsightCard({
  image,
  title,
  description,
  label,
  status,
  date,
}) {
  return (
    <article className="card insight-card">
      {image && (
        <div className="insight-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="insight-card__body">
        <div className="insight-card__top">
          <span className="insight-card__label">{label}</span>
          <span className="insight-card__status">{status}</span>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>
        <p className="insight-card__date">{date}</p>
      </div>
    </article>
  );
}

export default InsightCard;