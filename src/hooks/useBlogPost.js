import { useEffect, useState } from "react";
import { getPostBySlug } from "../services/api/blogApi";

const postCache = new Map();

export function clearBlogPostCache(slug) {
  if (slug) {
    postCache.delete(slug);
  } else {
    postCache.clear();
  }
}

export async function prefetchBlogPost(slug) {
  if (!slug) return null;

  if (postCache.has(slug)) {
    return postCache.get(slug);
  }

  const data = await getPostBySlug(slug);
  postCache.set(slug, data);
  return data;
}

export function useBlogPost(slug) {
  const [post, setPost] = useState(() => {
    return slug && postCache.has(slug) ? postCache.get(slug) : null;
  });

  const [loading, setLoading] = useState(() => {
    return slug ? !postCache.has(slug) : false;
  });

  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      setError("");
      setNotFound(false);
      return;
    }

    if (postCache.has(slug)) {
      setPost(postCache.get(slug));
      setLoading(false);
      setError("");
      setNotFound(false);
      return;
    }

    let isMounted = true;

    async function fetchPost() {
      try {
        setLoading(true);
        setError("");
        setNotFound(false);

        const data = await getPostBySlug(slug);

        if (!isMounted) return;

        postCache.set(slug, data);
        setPost(data);
      } catch (err) {
        if (!isMounted) return;

        if (err.message?.toLowerCase().includes("not found")) {
          setNotFound(true);
          setPost(null);
        } else {
          setError(err.message || "Failed to fetch post");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return {
    post,
    loading,
    error,
    notFound,
  };
}