import PageHero from "../../components/common/PageHero/PageHero";
import AchievementCard from "../../components/sections/achievements/AchievementCard/AchievementCard";
import AchievementTimelineItem from "../../components/sections/achievements/AchievementTimelineItem/AchievementTimelineItem";
import FeaturedAchievement from "../../components/sections/achievements/FeaturedAchievement/FeaturedAchievement";
import { useAchievements } from "../../hooks/useAchievements";
import "./Achievements.css";

function Achievements() {
  const { achievements } = useAchievements();

  const featuredAchievements = achievements.filter((item) => item.featured);
  const mainFeatured = featuredAchievements[0]; // only first one
  const timelineAchievements = achievements.filter((item) => !item.featured);

  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Milestones, Leadership & Growth"
        intro="A curated collection of leadership programs, academic recognition, and personal milestones that reflect my continuous learning journey."
      />

      <main className="section achievements-page">

        <div className="container">

          
          <section className="achievements-block">

            <div className="section-heading">
              <h2>Featured Achievements</h2>
              <p>Highlights that represent leadership, recognition, and growth.</p>
            </div>

            <FeaturedAchievement achievement={mainFeatured} />

          </section>

          <section className="achievements-block">
            <div className="section-heading">
              <h2>Growth Timeline</h2>
              <p>A timeline of learning, projects, and consistency over time.</p>
            </div>

            <div className="achievement-timeline">
              {timelineAchievements.map((achievement) => (
                <AchievementTimelineItem
                  key={achievement.id}
                  achievement={achievement}
                />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default Achievements;