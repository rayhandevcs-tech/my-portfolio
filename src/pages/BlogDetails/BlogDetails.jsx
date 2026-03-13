import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useBlogPost } from "../../hooks/useBlogPost";
import { incrementPostViews } from "../../services/api/blogApi";
import PageHero from "../../components/common/PageHero/PageHero";
import "./BlogDetails.css";

function BlogDetails() {
  const { slug } = useParams();
  const { post, loading, error, notFound } = useBlogPost(slug);
  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    if (!slug || hasIncrementedRef.current) return;

    hasIncrementedRef.current = true;

    incrementPostViews(slug).catch(() => {});
  }, [slug]);

  if (loading) {
    return (
      <main className="section">
        <p>Loading post...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section">
        <p>{error}</p>
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="section">
        <p>Post not found.</p>
      </main>
    );
  }

  return (
    <main className="blog-details-page">
      <PageHero title={post.title} subtitle={post.excerpt} />

      <section className="blog-details-content section">
        {post.coverImage && (
          <div className="blog-details-cover">
            <img
              src={post.coverImage}
              alt={post.title}
              className="blog-details-cover__image"
            />
          </div>
        )}

        <div className="blog-details-meta">
          <p>
            <strong>Category:</strong> {post.category}
          </p>
          <p>
            <strong>Published:</strong> {post.publishedAt}
          </p>
          <p>
            <strong>Reading Time:</strong> {post.readingTime}
          </p>
          <p>
            <strong>Views:</strong> {post.views ?? 0}
          </p>
        </div>

        <article className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default BlogDetails;