import "./AchievementCard.css";

function AchievementCard({ achievement }) {

  return (

    <article className="card achievement-card">

      {achievement.image && (

        <div className="achievement-card__image">
          <img src={achievement.image} alt={achievement.title} />
        </div>

      )}

      <div className="achievement-card__body">

        <div className="achievement-card__top">

          <span className="achievement-card__year">{achievement.year}</span>
          {achievement.type && (
            <span className="achievement-card__type">{achievement.type}</span>
          )}
          
        </div>

        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>

        {achievement.highlight && (
          <p className="achievement-card__highlight">{achievement.highlight}</p>
        )}
      </div>

    </article>

  );
}

export default AchievementCard;