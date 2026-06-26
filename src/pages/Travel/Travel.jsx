import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import InsightCard from "../../components/sections/insights/InsightCard/InsightCard";
import { useTravelEntries } from "../../hooks/useTravelEntries";
import { SITE_URL } from "../../data/site";

function Travel() {
  const { entries } = useTravelEntries();

  return (
    <>
      <Seo
        title="Travel | RayhanDev"
        description="Places, stories, and reflections — short travel notes and observations collected through movement and memory."
        keywords="travel, travel notes, reflections, bangladesh, journey"
        url={`${SITE_URL}/travel`}
      />

      <PageHero
        eyebrow="Travel"
        title="Places, Stories, and Reflections"
        intro="A space for short travel notes, observations, and meaningful moments collected through movement, memory, and experience."
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
                label={item.location}
                status={item.type}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Travel;