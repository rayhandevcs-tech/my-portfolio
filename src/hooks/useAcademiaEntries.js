import { getAllAcademiaEntries } from "../services/api/academiaApi";

export function useAcademiaEntries() {
  const entries = getAllAcademiaEntries();

  return { entries };
}