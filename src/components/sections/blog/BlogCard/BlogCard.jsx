import { Link } from "react-router-dom";
import Tag from "../../../common/Tag/Tag";
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

  return (
    <article className="card blog-card">
      {coverImage && (
        <div className="blog-card__image">
          <img src={coverImage} alt={title} />
        </div>
      )}

      <div className="blog-card__meta">
        {category && <span>{category}</span>}
        {category && publishedAt && <span>•</span>}
        {publishedAt && <span>{publishedAt}</span>}
        {publishedAt && readingTime && <span>•</span>}
        {readingTime && <span>{readingTime}</span>}
        {readingTime && typeof views === "number" && <span>•</span>}
        {typeof views === "number" && <span>{views} views</span>}
      </div>

      <h3 className="blog-card__title">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>

      {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}

      {tags?.length > 0 && (
        <div className="tags-wrap">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      <Link to={`/blog/${slug}`} className="blog-card__link">
        Read More →
      </Link>
    </article>
  );
}

export default BlogCard;