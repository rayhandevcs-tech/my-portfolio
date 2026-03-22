import { useEffect, useState } from "react";
import { getRelatedPostsBySlug } from "../services/api/blogApi";

const relatedPostsCache = new Map();

function getCacheKey(slug, limit) {
  return `${slug}-${limit}`;
}

export function clearRelatedPostsCache(slug, limit) {
  if (slug && limit) {
    relatedPostsCache.delete(getCacheKey(slug, limit));
    return;
  }

  if (slug) {
    for (const key of relatedPostsCache.keys()) {
      if (key.startsWith(`${slug}-`)) {
        relatedPostsCache.delete(key);
      }
    }
    return;
  }

  relatedPostsCache.clear();
}

export function useRelatedPosts(slug, limit = 3) {
  const cacheKey = getCacheKey(slug, limit);

  const [relatedPosts, setRelatedPosts] = useState(() => {
    return slug && relatedPostsCache.has(cacheKey)
      ? relatedPostsCache.get(cacheKey)
      : [];
  });

  const [loading, setLoading] = useState(() => {
    return slug ? !relatedPostsCache.has(cacheKey) : false;
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) {
      setRelatedPosts([]);
      setLoading(false);
      setError("");
      return;
    }

    if (relatedPostsCache.has(cacheKey)) {
      setRelatedPosts(relatedPostsCache.get(cacheKey));
      setLoading(false);
      setError("");
      return;
    }

    let isMounted = true;

    async function loadRelatedPosts() {
      try {
        setLoading(true);
        setError("");

        const data = await getRelatedPostsBySlug(slug, limit);

        if (!isMounted) return;

        const safeData = data || [];
        relatedPostsCache.set(cacheKey, safeData);
        setRelatedPosts(safeData);
      } catch (err) {
        if (!isMounted) return;

        setError(err.message || "Failed to fetch related posts");
        setRelatedPosts([]);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRelatedPosts();

    return () => {
      isMounted = false;
    };
  }, [slug, limit, cacheKey]);

  return {
    relatedPosts,
    loading,
    error,
  };
}