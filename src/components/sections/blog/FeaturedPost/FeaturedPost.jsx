import { useRef } from "react";
import { Link } from "react-router-dom";
import { prefetchBlogPost } from "../../../../hooks/useBlogPost";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import "./FeaturedPost.css";

function FeaturedPost({ post }) {
  const prefetchedRef = useRef(false);

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
        <div className="blog-featured__content">
          <p className="eyebrow">Featured Post</p>

          <h2>{title}</h2>

          <p className="blog-featured__meta">
            {category} {publishedAt && "•"} {publishedAt}
          </p>

          <p className="blog-featured__excerpt">{excerpt}</p>

          <Link
            to={`/blog/${slug}`}
            className="btn"
            onMouseEnter={handlePrefetch}
            onFocus={handlePrefetch}
          >
            Read Featured Post
          </Link>
        </div>

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