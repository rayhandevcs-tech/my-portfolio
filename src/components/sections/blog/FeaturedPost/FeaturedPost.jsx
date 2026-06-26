import { useRef } from "react";
import { Link } from "react-router-dom";
import { prefetchBlogPost } from "../../../../hooks/useBlogPost";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import { useTranslation } from "../../../../hooks/useTranslation";
import "./FeaturedPost.css";

function FeaturedPost({ post }) {
  const prefetchedRef = useRef(false);
  const t = useTranslation("blog");

  if (!post) return null;

  const { title, category, publishedAt, excerpt, slug, coverImage } = post;

  const optimizedCoverImage = optimizeCloudinaryImage(coverImage, 900);

  function handlePrefetch() {
    if (!slug || prefetchedRef.current) return;
    prefetchedRef.current = true;
    prefetchBlogPost(slug).catch(() => {});
  }

  return (
    <section className="blog-featured card">
      <div className="blog-featured__grid">

        {/* ── Content ── */}
        <div className="blog-featured__content">
          <p className="eyebrow">{t.featuredLabel}</p>

          <h2>{title}</h2>

          <p className="blog-featured__meta">
            {category}{publishedAt && ` • ${publishedAt}`}
          </p>

          {excerpt && (
            <p className="blog-featured__excerpt">{excerpt}</p>
          )}

          <Link
            to={`/blog/${slug}`}
            className="btn"
            onMouseEnter={handlePrefetch}
            onFocus={handlePrefetch}
          >
            {t.readFeatured}
          </Link>
        </div>

        {/* ── Cover image ── */}
        {coverImage && (
          <div className="blog-featured__image">
            <img
              src={optimizedCoverImage}
              alt={title}
              loading="lazy"
            />
          </div>
        )}

      </div>
    </section>
  );
}

export default FeaturedPost;
