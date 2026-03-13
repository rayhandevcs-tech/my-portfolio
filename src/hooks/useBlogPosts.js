import { useEffect, useMemo, useState } from "react";
import { getAllPosts } from "../services/api/blogApi";

const POSTS_PER_PAGE = 6;

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError("");
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(posts.map((post) => post.category).filter(Boolean)),
    ];
    return ["All", ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const query = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !query ||
        post.title?.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.category?.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchTerm]);

  const featuredPost = useMemo(() => {
    return filteredPosts.find((post) => post.featured) || null;
  }, [filteredPosts]);

  const nonFeaturedPosts = useMemo(() => {
    return featuredPost
      ? filteredPosts.filter((post) => post._id !== featuredPost._id)
      : filteredPosts;
  }, [filteredPosts, featuredPost]);

  const totalPages = Math.max(
    1,
    Math.ceil(nonFeaturedPosts.length / POSTS_PER_PAGE)
  );

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return nonFeaturedPosts.slice(startIndex, endIndex);
  }, [nonFeaturedPosts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    posts,
    filteredPosts,
    featuredPost,
    categories,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedPosts,
  };
}