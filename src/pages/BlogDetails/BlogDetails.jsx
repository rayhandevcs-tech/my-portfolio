import { useEffect, useMemo, useRef, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogPost } from "../../hooks/useBlogPost";
import { useRelatedPosts } from "../../hooks/useRelatedPosts";
import { incrementPostViews } from "../../services/api/blogApi";
import { extractHeadings } from "../../utils/extractHeadings";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import RelatedPosts from "../../components/sections/blog/RelatedPosts/RelatedPosts";
import TableOfContents from "../../components/sections/blog/TableOfContents/TableOfContents";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import "./BlogDetails.css";

const ReactMarkdown = lazy(() => import("react-markdown"));

function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { post, loading, error, notFound } = useBlogPost(slug);
  const {
    relatedPosts,
    loading: relatedLoading,
  } = useRelatedPosts(slug, 3);

  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    if (!slug) return;

    hasIncrementedRef.current = false;
  }, [slug]);

  useEffect(() => {
    if (!slug || hasIncrementedRef.current) return;

    hasIncrementedRef.current = true;
    incrementPostViews(slug).catch(() => {});
  }, [slug]);

  const headings = useMemo(() => {
    return extractHeadings(post?.content || "");
  }, [post]);

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
        image={post.coverImage || "/images/og-default.jpg"}
        url={`https://rayhancsdev.vercel.app/blog/${post.slug}`}
        type="article"
      />

      <main className="blog-details-page">
        <PageHero title={post.title} subtitle={post.excerpt} />

        <section className="blog-details-content section">
          <div className="details-back-wrap">
            <button
              type="button"
              className="details-back-btn"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>

          <TableOfContents headings={headings} />

          {post.coverImage && (
            <div className="blog-details-cover">
              <img
                src={post.coverImage}
                alt={post.title}
                className="blog-details-cover__image"
                loading="lazy"
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
            <Suspense fallback={<p>Loading content...</p>}>
              <ReactMarkdown
                components={{
                  h2: ({ children }) => {
                    const text = String(children);
                    const matched = headings.find(
                      (heading) => heading.text === text
                    );
                    const id =
                      matched?.id ||
                      text.toLowerCase().replace(/\s+/g, "-");
                    return <h2 id={id}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    const matched = headings.find(
                      (heading) => heading.text === text
                    );
                    const id =
                      matched?.id ||
                      text.toLowerCase().replace(/\s+/g, "-");
                    return <h3 id={id}>{children}</h3>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </Suspense>
          </article>

          {relatedLoading ? (
            <p>Loading related posts...</p>
          ) : (
            <RelatedPosts posts={relatedPosts} />
          )}
        </section>
      </main>
    </>
  );
}

export default BlogDetails;