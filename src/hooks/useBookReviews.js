import { useEffect, useMemo, useState } from "react";
import { getAllBooks } from "../services/api/bookApi";

const allBooksCacheKey = "all-books-cache";
const allBooksCache = new Map();

export function clearBookReviewsCache() {
  allBooksCache.clear();
}

export function useBookReviews() {
  const cachedBooks = allBooksCache.get(allBooksCacheKey) || [];

  const [books, setBooks] = useState(cachedBooks);
  const [loading, setLoading] = useState(!allBooksCache.has(allBooksCacheKey));
  const [error, setError] = useState("");

  useEffect(() => {
    if (allBooksCache.has(allBooksCacheKey)) {
      setBooks(allBooksCache.get(allBooksCacheKey) || []);
      setLoading(false);
      setError("");
      return;
    }

    let isMounted = true;

    async function loadBooks() {
      try {
        setLoading(true);
        setError("");

        const data = await getAllBooks();
        const safeData = data || [];

        if (!isMounted) return;

        allBooksCache.set(allBooksCacheKey, safeData);
        setBooks(safeData);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Failed to fetch book reviews");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBooks();

    return () => {
      isMounted = false;
    };
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