import "./AchievementTimelineItem.css";

function AchievementTimelineItem({ achievement }) {
  if (!achievement) return null;

  const { image, title, organization, date, type, summary, highlight } = achievement;

  return (
    <article className="achievement-timeline-item">
      <div className="achievement-timeline-item__marker">
        <span className="achievement-timeline-item__dot"></span>
      </div>

      <div className="achievement-timeline-item__card">
        {image && (
          <div className="achievement-timeline-item__image">
            <img src={image} alt={title} />
          </div>
        )}

        <div className="achievement-timeline-item__content">
          <div className="achievement-timeline-item__meta">
            {date && <span>{date}</span>}
            {type && <span>{type}</span>}
          </div>

          <h3>{title}</h3>

          {organization && (
            <p className="achievement-timeline-item__organization">
              {organization}
            </p>
          )}

          {summary && <p>{summary}</p>}

          {highlight && (
            <p className="achievement-timeline-item__highlight">{highlight}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default AchievementTimelineItem;