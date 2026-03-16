import { useEffect, useState } from "react";
import {
  deleteBook,
  getAdminBooks,
  toggleFeaturedBook,
} from "../services/api/bookApi";

export function useAdminBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBooks() {
    try {
      setLoading(true);
      setError("");
      const data = await getAdminBooks();
      setBooks(data);
    } catch (err) {
      setError(err.message || "Failed to load books");
    } finally {
      setLoading(false);
    }
  }

  async function deleteBookById(id) {
    await deleteBook(id);
    await loadBooks();
  }

  async function toggleFeaturedById(id) {
    await toggleFeaturedBook(id);
    await loadBooks();
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return {
    books,
    loading,
    error,
    reloadBooks: loadBooks,
    deleteBookById,
    toggleFeaturedById,
  };
}