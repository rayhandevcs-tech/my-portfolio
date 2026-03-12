import { getAllBookReviews } from "../services/api/bookApi";

export function useBookReviews() {
  const reviews = getAllBookReviews();

  return { reviews };
}