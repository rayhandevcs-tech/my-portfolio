import { useEffect, useState } from "react";
import { getPostBySlug } from "../services/api/blogApi";

export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        setError("");
        setNotFound(false);

        const data = await getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        if (err.message?.toLowerCase().includes("not found")) {
          setNotFound(true);
        } else {
          setError(err.message || "Failed to fetch post");
        }
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return {
    post,
    loading,
    error,
    notFound,
  };
}