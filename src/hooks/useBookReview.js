import { useEffect, useState } from "react";
import { getBookBySlug } from "../services/api/bookApi";

export function useBookReview(slug) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadBook() {
      try {
        setLoading(true);
        setError("");
        setNotFound(false);

        const data = await getBookBySlug(slug);
        setBook(data);
      } catch (err) {
        if (err.message?.toLowerCase().includes("not found")) {
          setNotFound(true);
        } else {
          setError(err.message || "Failed to fetch book review");
        }
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadBook();
    }
  }, [slug]);

  return {
    book,
    loading,
    error,
    notFound,
  };
}