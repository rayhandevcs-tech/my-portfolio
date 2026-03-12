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
  } = useBlogPosts();

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(posts.map((post) => post.category))];
    return ["All", ...uniqueCategories];
  }, [posts]);

  const showFeatured =
    featuredPost && activeCategory === "All" && !searchTerm.trim();

  const visiblePosts = showFeatured
    ? filteredPosts.filter((post) => post.id !== featuredPost.id)
    : filteredPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Thoughts, Tutorials & Notes"
        intro="A collection of ideas, lessons, and write-ups from my learning journey."
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

          {showFeatured && <FeaturedPost post={featuredPost} />}

          {visiblePosts.length > 0 ? (
            <div className="blog-grid">
              {visiblePosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
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