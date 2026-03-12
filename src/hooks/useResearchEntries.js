import { getAllResearchEntries } from "../services/api/researchApi";

export function useResearchEntries() {
  const entries = getAllResearchEntries();

  return { entries };
}