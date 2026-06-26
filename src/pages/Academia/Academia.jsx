import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import InsightCard from "../../components/sections/insights/InsightCard/InsightCard";
import { useAcademiaEntries } from "../../hooks/useAcademiaEntries";
import { SITE_URL } from "../../data/site";

function Academia() {
  const { entries } = useAcademiaEntries();

  return (
    <>
      <Seo
        title="Research | RayhanDev"
        description="Research notes, study explorations, and ideas I'm diving into — algorithms, data structures, and computer science fundamentals."
        keywords="research, computer science, algorithms, data structures, study notes"
        url={`${SITE_URL}/research`}
      />

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

export default Academia;