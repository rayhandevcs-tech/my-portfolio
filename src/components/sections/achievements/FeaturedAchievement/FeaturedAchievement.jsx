import "./FeaturedAchievement.css";

function FeaturedAchievement({ achievement }) {
  if (!achievement) return null;

  const {
    title,
    organization,
    year,
    type,
    summary,
    highlight,
    image,
  } = achievement;

  return (
    <section className="featured-achievement">
      <div className="featured-achievement__content">
        <p className="featured-achievement__eyebrow">
          Featured Achievement
        </p>

        <h2>{title}</h2>

        <p className="featured-achievement__org">
          {organization}
        </p>

        <div className="featured-achievement__meta">
          <span>{year}</span>
          <span>{type}</span>
        </div>

        <p className="featured-achievement__summary">
          {summary}
        </p>

        <p className="featured-achievement__highlight">
          {highlight}
        </p>
      </div>

      <div className="featured-achievement__image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
}

export default FeaturedAchievement;