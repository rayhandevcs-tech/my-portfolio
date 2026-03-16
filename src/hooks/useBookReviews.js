import { useEffect, useState } from "react";
import { getAllBooks } from "../services/api/bookApi";

export function useBookReviews() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBooks() {
      try {
        setLoading(true);
        setError("");
        const data = await getAllBooks();
        setBooks(data);
      } catch (err) {
        setError(err.message || "Failed to fetch book reviews");
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  return {
    books,
    loading,
    error,
  };
}