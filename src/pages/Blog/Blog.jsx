import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import BlogCard from "../../components/sections/blog/BlogCard/BlogCard";
import BlogCategoryFilter from "../../components/sections/blog/BlogCategoryFilter/BlogCategoryFilter";
import BlogSearchBar from "../../components/sections/blog/BlogSearchBar/BlogSearchBar";
import FeaturedPost from "../../components/sections/blog/FeaturedPost/FeaturedPost";
import BlogPagination from "../../components/sections/blog/BlogPagination/BlogPagination";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import "./Blog.css";

function Blog() {
  const {
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
    filteredPosts,
  } = useBlogPosts();

  if (loading) {
    return (
      <>
        <Seo
          title="Blog | RayhanDev"
          description="Read blog posts about React, full-stack development, architecture, debugging, and project building."
          keywords="blog, react blog, full stack blog, developer notes, javascript, mongodb"
          url="https://rayhancsdev.vercel.app/blog"
          type="website"
        />
        <main className="section">
          <p>Loading posts...</p>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Seo
          title="Blog | RayhanDev"
          description="Read blog posts about React, full-stack development, architecture, debugging, and project building."
          keywords="blog, react blog, full stack blog, developer notes, javascript, mongodb"
          url="https://rayhancsdev.vercel.app/blog"
          type="website"
        />
        <main className="section">
          <p>{error}</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Blog | RayhanDev"
        description="Read blog posts about React, full-stack development, architecture, debugging, and project building."
        keywords="blog, react blog, full stack blog, developer notes, javascript, mongodb"
        url="https://rayhancsdev.vercel.app/blog"
        type="website"
      />

      <main className="blog-page">
        <PageHero
          title="Blog"
          subtitle="Thoughts, lessons, experiments, and notes from my full-stack learning journey."
        />

        <section className="blog-page__content section">
          <BlogSearchBar value={searchTerm} onChange={setSearchTerm} />

          <BlogCategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {featuredPost && currentPage === 1 && (
            <div className="blog-page__featured">
              <FeaturedPost post={featuredPost} />
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <EmptyState
              title="No posts found"
              message="Try another keyword or category."
            />
          ) : (
            <>
              <div className="blog-grid">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post._id || post.slug} post={post} />
                ))}
              </div>

              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Blog;