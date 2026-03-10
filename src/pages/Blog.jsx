import { useMemo, useState } from "react";
import BlogHero from "../components/sections/blog/BlogHero";
import BlogCategoryFilter from "../components/sections/blog/BlogCategoryFilter";
import BlogCard from "../components/sections/blog/BlogCard";
import { blogCategories } from "../data/blogCategories";
import { blogPosts } from "../data/blogPosts";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      <BlogHero />

      <main className="section">
        <div className="container">
          <BlogCategoryFilter
            categories={blogCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {featuredPost && activeCategory === "All" && (
            <div className="featured-post-block">
              <p className="eyebrow">Featured Post</p>
              <BlogCard post={featuredPost} />
            </div>
          )}

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;