import { Link } from "react-router-dom";
import Tag from "../../../common/Tag/Tag";
import { prefetchBlogPost } from "../../../../hooks/useBlogPost";
import "./BlogCard.css";

function BlogCard({ post }) {
  if (!post) return null;

  const {
    coverImage,
    title,
    category,
    publishedAt,
    readingTime,
    slug,
    excerpt,
    tags,
    views,
  } = post;

  function handlePrefetch() {
    if (slug) {
      prefetchBlogPost(slug).catch(() => {});
    }
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
          <img src={coverImage} alt={title} loading="lazy" />
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

          {readingTime && (
            <span className="blog-card__meta-item blog-card__meta-item--muted">
              {readingTime}
            </span>
          )}

          {typeof views === "number" && (
            <span className="blog-card__meta-item blog-card__meta-item--muted">
              {views} views
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