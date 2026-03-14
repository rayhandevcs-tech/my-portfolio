import { useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Seo from "../../components/common/Seo/Seo";
import { useBlogPost } from "../../hooks/useBlogPost";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { incrementPostViews } from "../../services/api/blogApi";
import { getRelatedPosts } from "../../utils/getRelatedPosts";
import PageHero from "../../components/common/PageHero/PageHero";
import RelatedPosts from "../../components/sections/blog/RelatedPosts/RelatedPosts";
import "./BlogDetails.css";

function BlogDetails() {
  const { slug } = useParams();
  const { post, loading, error, notFound } = useBlogPost(slug);
  const { posts } = useBlogPosts();
  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    if (!slug || hasIncrementedRef.current) return;

    hasIncrementedRef.current = true;
    incrementPostViews(slug).catch(() => {});
  }, [slug]);

  const relatedPosts = useMemo(() => {
    return getRelatedPosts(posts, post, 3);
  }, [posts, post]);

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
      <Seo
        title={`${post.title} | RayhanDev`}
        description={post.excerpt || "Read this blog post on RayhanDev."}
        keywords={
          Array.isArray(post.tags) && post.tags.length > 0
            ? post.tags.join(", ")
            : `${post.category || "blog"}, developer blog`
        }
        image={post.coverImage || "/images/og-default.jpg"}
        url={`https://rayhancsdev.vercel.app/blog/${post.slug}`}
        type="article"
      />

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

        <RelatedPosts posts={relatedPosts} />
      </section>
    </main>
  );
}

export default BlogDetails;