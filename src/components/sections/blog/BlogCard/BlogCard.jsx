import { useRef } from "react";
import { Link } from "react-router-dom";
import Tag from "../../../common/Tag/Tag";
import { prefetchBlogPost } from "../../../../hooks/useBlogPost";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import { useTranslation } from "../../../../hooks/useTranslation";
import "./BlogCard.css";

function BlogCard({ post }) {
  const prefetchedRef = useRef(false);
  const t = useTranslation("blog");

  if (!post) return null;

  const { coverImage, title, category, publishedAt, slug, excerpt, tags } = post;

  const optimizedCoverImage = optimizeCloudinaryImage(coverImage, 600);

  function handlePrefetch() {
    if (!slug || prefetchedRef.current) return;
    prefetchedRef.current = true;
    prefetchBlogPost(slug).catch(() => {});
  }

  return (
    <article className="blog-card">
      {coverImage && (
        <Link
          to={`/blog/${slug}`}
          className="blog-card__image"
          aria-label={`Read ${title}`}
          onMouseEnter={handlePrefetch}
          onFocus={handlePrefetch}
        >
          <img src={optimizedCoverImage} alt={title} loading="lazy" />
        </Link>
      )}

      <div className="blog-card__body">
        <div className="blog-card__top">
          {category && <span className="blog-card__category">{category}</span>}
          {publishedAt && <span className="blog-card__date">{publishedAt}</span>}
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

        <div className="blog-card__footer">
          {tags?.length > 0 && (
            <div className="blog-card__tags">
              {tags.map((tag) => (
                <span key={tag} className="blog-card__tag">{tag}</span>
              ))}
            </div>
          )}
          <Link
            to={`/blog/${slug}`}
            className="blog-card__read"
            onMouseEnter={handlePrefetch}
            onFocus={handlePrefetch}
          >
            {t.readMore}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
