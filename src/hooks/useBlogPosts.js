import { useEffect, useMemo, useState } from "react";
import { getAllPosts } from "../services/api/blogApi";
import { normalizeSearch } from "../utils/normalizeSearch";

const POSTS_PER_PAGE = 6;
const allPostsCacheKey = "all-posts-cache";
const allPostsCache = new Map();

export function clearBlogPostsCache() {
  allPostsCache.clear();
}

export function useBlogPosts() {
  const cachedPosts = allPostsCache.get(allPostsCacheKey) || [];

  const [posts, setPosts] = useState(cachedPosts);
  const [loading, setLoading] = useState(!allPostsCache.has(allPostsCacheKey));
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (allPostsCache.has(allPostsCacheKey)) {
      setPosts(allPostsCache.get(allPostsCacheKey) || []);
      setLoading(false);
      setError("");
      return;
    }

    let isMounted = true;

    async function loadPosts() {
      try {
        setLoading(true);
        setError("");

        const data = await getAllPosts();
        const safeData = data || [];

        if (!isMounted) return;

        allPostsCache.set(allPostsCacheKey, safeData);
        setPosts(safeData);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Failed to fetch posts");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(posts.map((post) => post.category).filter(Boolean)),
    ];
    return ["All", ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const query = normalizeSearch(searchTerm);

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      if (!query) return matchesCategory;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        ...(Array.isArray(post.tags) ? post.tags : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
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