import { useEffect, useMemo, useState } from "react";
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
        setBooks(data || []);
      } catch (err) {
        setError(err.message || "Failed to fetch book reviews");
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  const featuredBook = useMemo(() => {
    return books.find((book) => book.featured) || null;
  }, [books]);

  const regularBooks = useMemo(() => {
    return featuredBook
      ? books.filter((book) => book._id !== featuredBook._id)
      : books;
  }, [books, featuredBook]);

  return {
    books,
    regularBooks,
    featuredBook,
    loading,
    error,
  };
}