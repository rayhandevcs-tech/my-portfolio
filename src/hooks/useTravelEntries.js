import { getAllTravelEntries } from "../services/api/travelApi";

export function useTravelEntries() {
  const entries = getAllTravelEntries();

  return { entries };
}