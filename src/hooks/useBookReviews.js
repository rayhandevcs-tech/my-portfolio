import { useEffect, useMemo, useState } from "react";
import { getAllBooks } from "../services/api/bookApi";

const allBooksCacheKey = "all-books-cache";
const allBooksCache = new Map();

const BOOKS_STORAGE_KEY = "book-reviews-cache-v1";
const BOOKS_STORAGE_TTL = 1000 * 60 * 10; // 10 minutes

function getStoredBooks() {
  try {
    const raw = localStorage.getItem(BOOKS_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    if (!parsed?.data || !parsed?.timestamp) {
      return null;
    }

    const isExpired = Date.now() - parsed.timestamp > BOOKS_STORAGE_TTL;

    if (isExpired) {
      localStorage.removeItem(BOOKS_STORAGE_KEY);
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
}

function setStoredBooks(data) {
  try {
    localStorage.setItem(
      BOOKS_STORAGE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  } catch {
    // ignore storage errors
  }
}

export function clearBookReviewsCache() {
  allBooksCache.clear();

  try {
    localStorage.removeItem(BOOKS_STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}

export async function prefetchBookReviews() {
  if (allBooksCache.has(allBooksCacheKey)) {
    return allBooksCache.get(allBooksCacheKey) || [];
  }

  const storedBooks =
    typeof window !== "undefined" ? getStoredBooks() : null;

  if (storedBooks) {
    allBooksCache.set(allBooksCacheKey, storedBooks);
    return storedBooks;
  }

  const data = await getAllBooks();
  const safeData = data || [];

  allBooksCache.set(allBooksCacheKey, safeData);

  if (typeof window !== "undefined") {
    setStoredBooks(safeData);
  }

  return safeData;
}

export function useBookReviews() {
  const storedBooks =
    typeof window !== "undefined" ? getStoredBooks() : null;

  const cachedBooks =
    allBooksCache.get(allBooksCacheKey) || storedBooks || [];

  const [books, setBooks] = useState(cachedBooks);
  const [loading, setLoading] = useState(
    !allBooksCache.has(allBooksCacheKey) && !storedBooks
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (allBooksCache.has(allBooksCacheKey)) {
      setBooks(allBooksCache.get(allBooksCacheKey) || []);
      setLoading(false);
      setError("");
      return;
    }

    const stored = getStoredBooks();

    if (stored) {
      allBooksCache.set(allBooksCacheKey, stored);
      setBooks(stored);
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
        setStoredBooks(safeData);
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