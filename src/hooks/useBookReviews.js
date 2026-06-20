import { useEffect, useMemo, useState } from "react";
import { getAllBooks } from "../services/api/bookApi";

const CACHE_KEY = "all-books-cache";
const STORAGE_KEY = "book-reviews-cache-v1";
const STORAGE_TTL = 1000 * 60 * 10;
const FETCH_TIMEOUT = 8000;

const memoryCache = new Map();

function getStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.data || !parsed?.timestamp) return null;
    return { data: parsed.data, expired: Date.now() - parsed.timestamp > STORAGE_TTL };
  } catch {
    return null;
  }
}

function setStored(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {}
}

export function clearBookReviewsCache() {
  memoryCache.clear();
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

export async function prefetchBookReviews() {
  if (memoryCache.has(CACHE_KEY)) return memoryCache.get(CACHE_KEY) || [];
  const stored = getStored();
  if (stored && !stored.expired) {
    memoryCache.set(CACHE_KEY, stored.data);
    return stored.data;
  }
  const data = await getAllBooks();
  const safe = data || [];
  memoryCache.set(CACHE_KEY, safe);
  setStored(safe);
  return safe;
}

async function fetchWithTimeout(ms) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const data = await getAllBooks(controller.signal);
    clearTimeout(id);
    return data || [];
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export function useBookReviews() {
  const stored = getStored();
  const memoryCached = memoryCache.get(CACHE_KEY);

  const initialBooks = memoryCached || stored?.data || [];
  const hasStale = initialBooks.length > 0;
  const needsFresh = !memoryCached && (!stored || stored.expired);

  const [books, setBooks] = useState(initialBooks);
  const [loading, setLoading] = useState(!hasStale);
  const [revalidating, setRevalidating] = useState(hasStale && needsFresh);
  const [error, setError] = useState("");

  useEffect(() => {
    if (memoryCached) {
      setBooks(memoryCached);
      setLoading(false);
      setRevalidating(false);
      return;
    }

    let isMounted = true;

    async function load() {
      try {
        if (!hasStale) setLoading(true);
        else setRevalidating(true);
        setError("");

        const data = await fetchWithTimeout(FETCH_TIMEOUT);
        if (!isMounted) return;

        memoryCache.set(CACHE_KEY, data);
        setStored(data);
        setBooks(data);
      } catch (err) {
        if (!isMounted) return;
        if (!hasStale) {
          setError(
            err.name === "AbortError"
              ? "Server is taking too long. Please try again."
              : err.message || "Failed to fetch book reviews"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setRevalidating(false);
        }
      }
    }

    load();
    return () => { isMounted = false; };
  }, []);

  const featuredBook = useMemo(
    () => books.find((b) => b.featured) || null,
    [books]
  );

  const regularBooks = useMemo(
    () => featuredBook ? books.filter((b) => b._id !== featuredBook._id) : books,
    [books, featuredBook]
  );

  return {
    books,
    regularBooks,
    featuredBook,
    loading,
    revalidating,
    error,
  };
}