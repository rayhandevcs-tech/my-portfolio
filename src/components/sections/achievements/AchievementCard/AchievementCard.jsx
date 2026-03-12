import "./AchievementCard.css";

function AchievementCard({ achievement }) {
  if (!achievement) return null;

  const { image, title, description, year, type, highlight } = achievement;

  return (
    <article className="card achievement-card">
      {image && (
        <div className="achievement-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="achievement-card__body">
        <div className="achievement-card__top">
          {year && (
            <span className="achievement-card__year">{year}</span>
          )}

          {type && (
            <span className="achievement-card__type">{type}</span>
          )}
        </div>

        <h3>{title}</h3>

        {description && <p>{description}</p>}

        {highlight && (
          <p className="achievement-card__highlight">
            {highlight}
          </p>
        )}
      </div>
    </article>
  );
}

export default AchievementCard;