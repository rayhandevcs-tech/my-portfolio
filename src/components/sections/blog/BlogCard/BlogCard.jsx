import { useRef } from "react";
import { Link } from "react-router-dom";
import Tag from "../../../common/Tag/Tag";
import { prefetchBlogPost } from "../../../../hooks/useBlogPost";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import "./BlogCard.css";

function BlogCard({ post }) {
  const prefetchedRef = useRef(false);

  if (!post) return null;

  const { coverImage, title, category, publishedAt, slug, excerpt, tags } = post;

  const optimizedCoverImage = optimizeCloudinaryImage(coverImage, 600);

  function handlePrefetch() {
    if (!slug || prefetchedRef.current) return;

    prefetchedRef.current = true;
    prefetchBlogPost(slug).catch(() => {});
  }

  return (
    <article className="card blog-card">
      {coverImage && (
        <Link
          to={`/blog/${slug}`}
          className="blog-card__image"
          aria-label={`Read ${title}`}
          onMouseEnter={handlePrefetch}
          onFocus={handlePrefetch}
        >
          <img
            src={optimizedCoverImage}
            alt={title}
            loading="lazy"
          />
        </Link>
      )}

      <div className="blog-card__body">
        <div className="blog-card__meta">
          {category && <span className="blog-card__meta-item">{category}</span>}

          {publishedAt && (
            <span className="blog-card__meta-item blog-card__meta-item--muted">
              {publishedAt}
            </span>
          )}
        </div>

        <h3 className="blog-card__title">
          <Link
            to={`/blog/${slug}`}
            onMouseEnter={handlePrefetch}
            onFocus={handlePrefetch}
          >
            {title}
          </Link>
        </h3>

        {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}

        {tags?.length > 0 && (
          <div className="tags-wrap">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        <Link
          to={`/blog/${slug}`}
          className="blog-card__link"
          onMouseEnter={handlePrefetch}
          onFocus={handlePrefetch}
        >
          Read More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;