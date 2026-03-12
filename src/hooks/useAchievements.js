import { getAllAchievements } from "../services/api/achievementApi";

export function useAchievements() {
  const achievements = getAllAchievements();

  return { achievements };
}