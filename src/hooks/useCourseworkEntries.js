import { getAllCourseworkEntries } from "../services/api/courseworkApi";

export function useCourseworkEntries() {
  const entries = getAllCourseworkEntries();

  return { entries };
}