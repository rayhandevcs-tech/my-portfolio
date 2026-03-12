import PageHero from "../../components/common/PageHero/PageHero";
import InsightCard from "../../components/sections/insights/InsightCard/InsightCard";
import { useResearchEntries } from "../../hooks/useResearchEntries";

function Research() {
  const { entries } = useResearchEntries();

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
            {entries.map((item) => (
              <InsightCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                label={item.topic}
                status={item.status}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Research;