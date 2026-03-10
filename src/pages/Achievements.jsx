import AchievementCard from "../components/sections/achievements/AchievementCard";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Milestones</p>
        <h1>Achievements</h1>
        <p className="page-intro">
          A few milestones from my learning journey, project work and ongoing
          development as a frontend developer.
        </p>

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
  );
}

export default Achievements;