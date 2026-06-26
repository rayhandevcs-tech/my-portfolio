import { useEffect, useMemo, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogPost } from "../../hooks/useBlogPost";
import { useRelatedPosts } from "../../hooks/useRelatedPosts";
import { optimizeCloudinaryImage } from "../../utils/optimizeCloudinaryImage";
import Seo from "../../components/common/Seo/Seo";
import { SITE_URL } from "../../data/site";
import RelatedPosts from "../../components/sections/blog/RelatedPosts/RelatedPosts";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import "./BlogDetails.css";

const ReactMarkdown = lazy(() => import("react-markdown"));

function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { post, loading, error, notFound } = useBlogPost(slug);
  const { relatedPosts, loading: relatedLoading } = useRelatedPosts(slug, 3);

  useEffect(() => {
    import("react-markdown");
  }, []);

  const optimizedCoverImage = optimizeCloudinaryImage(post?.coverImage, 1200);

  const formattedPublishedDate = useMemo(() => {
    if (!post?.publishedAt) return "Not available";
    const date = new Date(post.publishedAt);
    if (Number.isNaN(date.getTime())) return post.publishedAt;
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }, [post?.publishedAt]);

  const buildHeadingId = (text = "") =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  if (loading) {
    return (
      <main className="blog-details-state">
        <div className="state-icon">⏳</div>
        <h2>Loading post...</h2>
        <p>Please wait while the article is being loaded.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="blog-details-state">
        <div className="state-icon">⚠️</div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button
          type="button"
          className="details-back-btn"
          onClick={() => navigate("/blog")}
        >
          ← Back to Blog
        </button>
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="blog-details-state">
        <div className="state-icon">🔍</div>
        <h2>Post not found</h2>
        <p>The article you are looking for does not exist or may have moved.</p>
        <button
          type="button"
          className="details-back-btn"
          onClick={() => navigate("/blog")}
        >
          ← Back to Blog
        </button>
      </main>
    );
  }

  return (
    <>
      <ReadingProgress />

      <Seo
        title={`${post.title} | RayhanDev`}
        description={post.excerpt || "Read this blog post on RayhanDev."}
        keywords={
          Array.isArray(post.tags) && post.tags.length > 0
            ? post.tags.join(", ")
            : `${post.category || "blog"}, developer blog`
        }
        image={optimizedCoverImage || "/images/og-default.jpg"}
        url={`${SITE_URL}/blog/${post.slug}`}
        type="article"
      />

      <main className="blog-details-page">
        <section className="blog-details-content section">

          {/* Back button */}
          <div className="details-back-wrap">
            <button
              type="button"
              className="details-back-btn"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              ← Back to Blog
            </button>
          </div>

          {/* Category badge */}
          {post.category && (
            <div className="blog-details-badge-row">
              <span className="blog-details-badge">{post.category}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="blog-details-title">{post.title}</h1>

          {/* Meta row */}
          <div className="blog-details-meta">
            <div className="meta-item">
              <span className="meta-icon" aria-hidden="true">📅</span>
              <span>{formattedPublishedDate}</span>
            </div>

            <div className="meta-divider" aria-hidden="true" />

            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="meta-item">
                <span className="meta-icon" aria-hidden="true">🏷️</span>
                <span>{post.tags.slice(0, 3).join(", ")}</span>
              </div>
            )}
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <div className="blog-details-cover">
              <img
                src={optimizedCoverImage}
                alt={post.title}
                className="blog-details-cover__image"
                loading="lazy"
              />
            </div>
          )}

          {/* Markdown article */}
          <article className="markdown-content">
            <Suspense fallback={<p className="content-loading">Loading content...</p>}>
              <ReactMarkdown
                components={{
                  h2: ({ children }) => {
                    const text = Array.isArray(children)
                      ? children.join("")
                      : String(children);
                    return <h2 id={buildHeadingId(text)}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const text = Array.isArray(children)
                      ? children.join("")
                      : String(children);
                    return <h3 id={buildHeadingId(text)}>{children}</h3>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </Suspense>
          </article>

          {/* Related posts */}
          <div className="blog-details-related">
            {relatedLoading ? (
              <p className="content-loading">Loading related posts...</p>
            ) : (
              <>
                {relatedPosts?.length > 0 && (
                  <p className="related-label">Related Posts</p>
                )}
                <RelatedPosts posts={relatedPosts} />
              </>
            )}
          </div>

        </section>
      </main>
    </>
  );
}

export default BlogDetails;
