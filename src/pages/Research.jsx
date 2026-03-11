import PageHero from "../components/common/PageHero";
import { researchEntries } from "../data/research";

function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research Notes and Explorations"
        intro="A developing space for ideas, notes, and topics I want to explore more deeply over time."
      />

      <main className="section">
        <div className="container">
          <div className="card-grid">
            {researchEntries.map((item) => (
              <article className="card insight-card" key={item.id}>
                {item.image && (
                  <div className="insight-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}

                <div className="insight-card__body">
                  <div className="insight-card__top">
                    <span className="insight-card__label">{item.topic}</span>
                    <span className="insight-card__status">{item.status}</span>
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

export default Research;