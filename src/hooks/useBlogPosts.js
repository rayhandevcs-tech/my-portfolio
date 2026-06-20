import { useEffect, useMemo, useState } from "react";
import { getAllPosts } from "../services/api/blogApi";
import { normalizeSearch } from "../utils/normalizeSearch";

const POSTS_PER_PAGE = 6;
const CACHE_KEY = "all-posts-cache";
const STORAGE_KEY = "blog-posts-cache-v1";
const STORAGE_TTL = 1000 * 60 * 10;
const FETCH_TIMEOUT = 8000;

const memoryCache = new Map();

function getStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.data || !parsed?.timestamp) return null;
    return { data: parsed.data, expired: Date.now() - parsed.timestamp > STORAGE_TTL };
  } catch {
    return null;
  }
}

function setStored(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {}
}

export function clearBlogPostsCache() {
  memoryCache.clear();
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

export async function prefetchBlogPosts() {
  if (memoryCache.has(CACHE_KEY)) return memoryCache.get(CACHE_KEY) || [];
  const stored = getStored();
  if (stored && !stored.expired) {
    memoryCache.set(CACHE_KEY, stored.data);
    return stored.data;
  }
  const data = await getAllPosts();
  const safe = data || [];
  memoryCache.set(CACHE_KEY, safe);
  setStored(safe);
  return safe;
}

async function fetchWithTimeout(ms) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const data = await getAllPosts(controller.signal);
    clearTimeout(id);
    return data || [];
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export function useBlogPosts() {
  const stored = getStored();
  const memoryCached = memoryCache.get(CACHE_KEY);

  const initialPosts = memoryCached || stored?.data || [];
  const hasStale = initialPosts.length > 0;
  const needsFresh = !memoryCached && (!stored || stored.expired);

  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(!hasStale);
  const [revalidating, setRevalidating] = useState(hasStale && needsFresh);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (memoryCached) {
      setPosts(memoryCached);
      setLoading(false);
      setRevalidating(false);
      return;
    }

    let isMounted = true;

    async function load() {
      try {
        if (!hasStale) setLoading(true);
        else setRevalidating(true);
        setError("");

        const data = await fetchWithTimeout(FETCH_TIMEOUT);
        if (!isMounted) return;

        memoryCache.set(CACHE_KEY, data);
        setStored(data);
        setPosts(data);
      } catch (err) {
        if (!isMounted) return;
        if (!hasStale) {
          setError(
            err.name === "AbortError"
              ? "Server is taking too long. Please try again."
              : err.message || "Failed to fetch posts"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setRevalidating(false);
        }
      }
    }

    load();
    return () => { isMounted = false; };
  }, []);

  const categories = useMemo(() => {
    const unique = [...new Set(posts.map((p) => p.category).filter(Boolean))];
    return ["All", ...unique];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const query = normalizeSearch(searchTerm);
    return posts.filter((post) => {
      const matchesCat = activeCategory === "All" || post.category === activeCategory;
      if (!query) return matchesCat;
      const text = [post.title, post.excerpt, post.category, ...(post.tags || [])]
        .filter(Boolean).join(" ").toLowerCase();
      return matchesCat && text.includes(query);
    });
  }, [posts, activeCategory, searchTerm]);

  const featuredPost = useMemo(
    () => filteredPosts.find((p) => p.featured) || null,
    [filteredPosts]
  );

  const nonFeaturedPosts = useMemo(
    () => featuredPost ? filteredPosts.filter((p) => p._id !== featuredPost._id) : filteredPosts,
    [filteredPosts, featuredPost]
  );

  const totalPages = Math.max(1, Math.ceil(nonFeaturedPosts.length / POSTS_PER_PAGE));

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return nonFeaturedPosts.slice(start, start + POSTS_PER_PAGE);
  }, [nonFeaturedPosts, currentPage]);

  useEffect(() => { setCurrentPage(1); }, [searchTerm, activeCategory]);
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  return {
    posts,
    filteredPosts,
    featuredPost,
    categories,
    loading,
    revalidating,
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