import { useEffect, useState } from "react";
import {
  deletePost,
  getAllPosts,
  toggleFeaturedPost,
} from "../services/api/blogApi";

export function useAdminPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPosts() {
    try {
      setLoading(true);
      setError("");
      const data = await getAllPosts();
      setPosts(data);
    } catch (err) {
      setError(err.message || "Failed to load posts");
    } finally {
      setLoading(false);
    }
  }

  async function handleDeletePost(id) {
    await deletePost(id);
    await loadPosts();
  }

  async function handleToggleFeatured(id) {
    await toggleFeaturedPost(id);
    await loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    reloadPosts: loadPosts,
    deletePostById: handleDeletePost,
    toggleFeaturedById: handleToggleFeatured,
  };
}