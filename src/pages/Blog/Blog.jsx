import { useMemo } from "react";

import PageHero from "../../components/common/PageHero/PageHero";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import BlogCard from "../../components/sections/blog/BlogCard/BlogCard";
import BlogCategoryFilter from "../../components/sections/blog/BlogCategoryFilter/BlogCategoryFilter";
import BlogSearchBar from "../../components/sections/blog/BlogSearchBar/BlogSearchBar";
import FeaturedPost from "../../components/sections/blog/FeaturedPost/FeaturedPost";

import { useBlogPosts } from "../../hooks/useBlogPosts";

function Blog() {
  const {
    posts,
    featuredPost,
    filteredPosts,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    loading,
    error,
  } = useBlogPosts();

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(posts.map((post) => post.category))];
    return ["All", ...uniqueCategories];
  }, [posts]);

  const showFeatured =
    featuredPost && activeCategory === "All" && !searchTerm.trim();

  const visiblePosts = showFeatured
    ? filteredPosts.filter((post) => post._id !== featuredPost._id)
    : filteredPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        intro="Thoughts, tutorials, notes, and reflections from my learning journey."
      />
      

      <main className="section">
        <div className="container">
          <div className="blog-toolbar">
            <BlogCategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <BlogSearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {loading && <p>Loading posts...</p>}

          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && showFeatured && (
            <FeaturedPost post={featuredPost} />
          )}

          {!loading && !error && visiblePosts.length > 0 ? (
            <div className="blog-grid">
              {visiblePosts.map((post) => (
                <BlogCard key={post._id || post.slug} post={post} />
              ))}
            </div>
          ) : null}

          {!loading && !error && visiblePosts.length === 0 && (
            <EmptyState
              title="No posts found"
              text="Try another category or search term."
            />
          )}
        </div>
      </main>
    </>
  );
}

export default Blog;