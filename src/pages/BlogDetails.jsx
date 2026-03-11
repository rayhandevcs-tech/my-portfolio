import { Link, useParams } from "react-router-dom";

import ReadingProgress from "../components/common/ReadingProgress";
import EmptyState from "../components/common/EmptyState";
import BlogCard from "../components/sections/blog/BlogCard";
import Tag from "../components/common/Tag";

import { blogPosts } from "../data/blogPosts";

function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="section">
        <div className="container">
          <EmptyState
            title="Post not found"
            text="The blog post you are looking for does not exist."
          />
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (item) => item.slug !== post.slug && item.category === post.category
    )
    .slice(0, 2);

  return (
    <>
      <ReadingProgress />

      <main className="section">
        <div className="container">
          <article className="blog-details">
            <Link to="/blog" className="blog-details__back">
              ← Back to Blog
            </Link>

            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>

            <div className="blog-details__meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {post.image && (
              <div className="blog-details__cover">
                <img src={post.image} alt={post.title} />
              </div>
            )}

            {post.tags?.length > 0 && (
              <div className="tags-wrap blog-details__tags">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}

            <div className="blog-details__content preserve-lines">
              <p>{post.content}</p>
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <section className="blog-related section">
              <div className="section-header">
                <h2 className="section-title">Related Posts</h2>
              </div>

              <div className="blog-grid">
                {relatedPosts.map((item) => (
                  <BlogCard key={item.id} post={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default BlogDetails;