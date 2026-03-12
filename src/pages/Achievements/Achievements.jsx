import PageHero from "../../components/common/PageHero/PageHero";
import AchievementCard from "../../components/sections/achievements/AchievementCard/AchievementCard";

import { useAchievements } from "../../hooks/useAchievements";

function Achievements() {
  const { achievements } = useAchievements();

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
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Achievements;