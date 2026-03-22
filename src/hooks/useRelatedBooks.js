import { useEffect, useState } from "react";
import { getRelatedBooksBySlug } from "../services/api/bookApi";

const relatedBooksCache = new Map();

function getCacheKey(slug, limit) {
  return `${slug}-${limit}`;
}

export function clearRelatedBooksCache(slug, limit) {
  if (slug && limit) {
    relatedBooksCache.delete(getCacheKey(slug, limit));
    return;
  }

  if (slug) {
    for (const key of relatedBooksCache.keys()) {
      if (key.startsWith(`${slug}-`)) {
        relatedBooksCache.delete(key);
      }
    }
    return;
  }

  relatedBooksCache.clear();
}

export function useRelatedBooks(slug, limit = 2) {
  const cacheKey = getCacheKey(slug, limit);

  const [relatedBooks, setRelatedBooks] = useState(() => {
    return slug && relatedBooksCache.has(cacheKey)
      ? relatedBooksCache.get(cacheKey)
      : [];
  });

  const [loading, setLoading] = useState(() => {
    return slug ? !relatedBooksCache.has(cacheKey) : false;
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) {
      setRelatedBooks([]);
      setLoading(false);
      setError("");
      return;
    }

    if (relatedBooksCache.has(cacheKey)) {
      setRelatedBooks(relatedBooksCache.get(cacheKey));
      setLoading(false);
      setError("");
      return;
    }

    let isMounted = true;

    async function loadRelatedBooks() {
      try {
        setLoading(true);
        setError("");

        const data = await getRelatedBooksBySlug(slug, limit);

        if (!isMounted) return;

        const safeData = data || [];
        relatedBooksCache.set(cacheKey, safeData);
        setRelatedBooks(safeData);
      } catch (err) {
        if (!isMounted) return;

        setError(err.message || "Failed to fetch related books");
        setRelatedBooks([]);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRelatedBooks();

    return () => {
      isMounted = false;
    };
  }, [slug, limit, cacheKey]);

  return {
    relatedBooks,
    loading,
    error,
  };
}