import { useEffect, useMemo, useState } from "react";
import { getAllPosts } from "../services/api/blogApi";
import { normalizeSearch } from "../utils/normalizeSearch";

const POSTS_PER_PAGE = 6;
const allPostsCacheKey = "all-posts-cache";
const allPostsCache = new Map();

const BLOG_STORAGE_KEY = "blog-posts-cache-v1";
const BLOG_STORAGE_TTL = 1000 * 60 * 10; // 10 minutes

function getStoredPosts() {
  try {
    const raw = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);

    if (!parsed?.data || !parsed?.timestamp) {
      return null;
    }

    const isExpired = Date.now() - parsed.timestamp > BLOG_STORAGE_TTL;

    if (isExpired) {
      localStorage.removeItem(BLOG_STORAGE_KEY);
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
}

function setStoredPosts(data) {
  try {
    localStorage.setItem(
      BLOG_STORAGE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  } catch {
    // ignore storage errors
  }
}

export function clearBlogPostsCache() {
  allPostsCache.clear();

  try {
    localStorage.removeItem(BLOG_STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}

export async function prefetchBlogPosts() {
  if (allPostsCache.has(allPostsCacheKey)) {
    return allPostsCache.get(allPostsCacheKey) || [];
  }

  const storedPosts =
    typeof window !== "undefined" ? getStoredPosts() : null;

  if (storedPosts) {
    allPostsCache.set(allPostsCacheKey, storedPosts);
    return storedPosts;
  }

  const data = await getAllPosts();
  const safeData = data || [];

  allPostsCache.set(allPostsCacheKey, safeData);

  if (typeof window !== "undefined") {
    setStoredPosts(safeData);
  }

  return safeData;
}

export function useBlogPosts() {
  const storedPosts =
    typeof window !== "undefined" ? getStoredPosts() : null;

  const cachedPosts =
    allPostsCache.get(allPostsCacheKey) || storedPosts || [];

  const [posts, setPosts] = useState(cachedPosts);
  const [loading, setLoading] = useState(
    !allPostsCache.has(allPostsCacheKey) && !storedPosts
  );
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

    const stored = getStoredPosts();

    if (stored) {
      allPostsCache.set(allPostsCacheKey, stored);
      setPosts(stored);
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
        setStoredPosts(safeData);
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