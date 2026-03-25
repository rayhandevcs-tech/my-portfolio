import "./AchievementCard.css";

function AchievementCard({ achievement }) {
  if (!achievement) return null;

  const { image, title, organization, summary, year, type, highlight } = achievement;

  return (
    <article className="card achievement-card">
      {image && (
        <div className="achievement-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="achievement-card__body">
        <div className="achievement-card__meta">
          {year && <span className="achievement-card__year">{year}</span>}
          {type && <span className="achievement-card__type">{type}</span>}
        </div>

        <h3>{title}</h3>

        {organization && (
          <p className="achievement-card__organization">{organization}</p>
        )}

        {summary && <p>{summary}</p>}

        {highlight && (
          <p className="achievement-card__highlight">{highlight}</p>
        )}
      </div>
    </article>
  );
}

export default AchievementCard;