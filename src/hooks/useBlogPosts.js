import { useMemo, useState } from "react";
import { getAllPosts } from "../services/api/blogApi";
import { BLOG_DEFAULT_CATEGORY } from "../constants/blog";

export function useBlogPosts() {
  const [activeCategory, setActiveCategory] = useState(BLOG_DEFAULT_CATEGORY);
  const [searchTerm, setSearchTerm] = useState("");

  const posts = getAllPosts();

  const featuredPost = useMemo(
    () => posts.find((post) => post.featured),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    let result =
      activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory);

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();

      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [posts, activeCategory, searchTerm]);

  return {
    posts,
    featuredPost,
    filteredPosts,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
  };
}