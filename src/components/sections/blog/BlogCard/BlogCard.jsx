import { Link } from "react-router-dom";
import Tag from "../../../common/Tag/Tag";
import "./BlogCard.css";

function BlogCard({ post }) {
  if (!post) return null;

  const { image, title, category, date, readTime, slug, excerpt, tags } = post;

  return (
    <article className="card blog-card">
      {image && (
        <div className="blog-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="blog-card__meta">
        {category && <span>{category}</span>}
        {category && date && <span>•</span>}
        {date && <span>{date}</span>}
        {date && readTime && <span>•</span>}
        {readTime && <span>{readTime}</span>}
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