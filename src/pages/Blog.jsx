import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import EmptyState from "../components/common/EmptyState";
import BlogCard from "../components/sections/blog/BlogCard";
import BlogCategoryFilter from "../components/sections/blog/BlogCategoryFilter";
import BlogHero from "../components/sections/blog/BlogHero";

import { blogCategories } from "../data/blogCategories";
import { blogPosts } from "../data/blogPosts";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = useMemo(
    () => blogPosts.find((post) => post.featured),
    []
  );

  const showFeatured =
    featuredPost &&
    activeCategory === "All" &&
    !searchTerm.trim();

  const filteredPosts = useMemo(() => {
    let posts =
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();

      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
    }

    if (showFeatured) {
      posts = posts.filter((post) => post.id !== featuredPost.id);
    }

    return posts;
  }, [activeCategory, searchTerm, featuredPost, showFeatured]);

  return (
    <>
      <BlogHero />

      <main className="section">
        <div className="container">
          <div className="blog-toolbar">
            <BlogCategoryFilter
              categories={blogCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <div className="blog-search">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search blog posts"
              />
            </div>
          </div>

          {showFeatured && (
  <section className="blog-featured card">
    <div className="blog-featured__grid">
      <div className="blog-featured__content">
        <p className="eyebrow">Featured Post</p>

        <h2>{featuredPost.title}</h2>

        <p className="blog-featured__meta">
          {featuredPost.category} • {featuredPost.date} •{" "}
          {featuredPost.readTime}
        </p>

        <p className="blog-featured__excerpt">{featuredPost.excerpt}</p>

        <Link to={`/blog/${featuredPost.slug}`} className="btn">
          Read Featured Post
        </Link>
      </div>

      {featuredPost.image && (
        <div className="blog-featured__image">
          <img src={featuredPost.image} alt={featuredPost.title} />
        </div>
      )}
    </div>
  </section>
)}

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
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