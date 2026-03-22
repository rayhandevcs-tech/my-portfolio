import { useEffect, useState } from "react";
import { getBookBySlug } from "../services/api/bookApi";

const bookCache = new Map();

export function clearBookReviewCache(slug) {
  if (slug) {
    bookCache.delete(slug);
  } else {
    bookCache.clear();
  }
}

export function useBookReview(slug) {
  const [book, setBook] = useState(() => {
    return slug && bookCache.has(slug) ? bookCache.get(slug) : null;
  });

  const [loading, setLoading] = useState(() => {
    return slug ? !bookCache.has(slug) : false;
  });

  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setBook(null);
      setLoading(false);
      setError("");
      setNotFound(false);
      return;
    }

    if (bookCache.has(slug)) {
      setBook(bookCache.get(slug));
      setLoading(false);
      setError("");
      setNotFound(false);
      return;
    }

    let isMounted = true;

    async function loadBook() {
      try {
        setLoading(true);
        setError("");
        setNotFound(false);

        const data = await getBookBySlug(slug);

        if (!isMounted) return;

        bookCache.set(slug, data);
        setBook(data);
      } catch (err) {
        if (!isMounted) return;

        if (err.message?.toLowerCase().includes("not found")) {
          setNotFound(true);
          setBook(null);
        } else {
          setError(err.message || "Failed to fetch book review");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBook();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return {
    book,
    loading,
    error,
    notFound,
  };
}