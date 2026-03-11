import PageHero from "../components/common/PageHero";
import { travelEntries } from "../data/travel";

function Travel() {
  return (
    <>
      <PageHero
        eyebrow="Travel"
        title="Places, Stories, and Reflections"
        intro="A space for short travel notes, observations, and meaningful moments collected through movement, memory, and experience."
      />

      <main className="section">
        <div className="container">
          <div className="card-grid">
            {travelEntries.map((item) => (
              <article className="card insight-card" key={item.id}>
                {item.image && (
                  <div className="insight-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}

                <div className="insight-card__body">
                  <div className="insight-card__top">
                    <span className="insight-card__label">{item.location}</span>
                    <span className="insight-card__status">{item.type}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="insight-card__date">{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Travel;