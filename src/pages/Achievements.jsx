import PageHero from "../components/common/PageHero";
import AchievementCard from "../components/sections/achievements/AchievementCard";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Milestones and Progress"
        intro="A collection of milestones that reflect my learning journey, consistency, project growth, and personal development over time."
      />

      <main className="section">

        <div className="container">

          <div className="card-grid">
            
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}

          </div>

        </div>

      </main>
    </>
  );
}

export default Achievements;