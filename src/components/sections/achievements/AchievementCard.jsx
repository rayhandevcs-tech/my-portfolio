import "./AchievementCard.css";

function AchievementCard({ achievement }) {

  return (

    <article className="achievement-card">

      <div className="achievement-card__body">

        <p className="achievement-card__year">{achievement.year}</p>
        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>
        
      </div>

    </article>

  );
}

export default AchievementCard;