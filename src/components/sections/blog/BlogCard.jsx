import { Link } from "react-router-dom";
import "./BlogCard.css";
import Tag from "../../common/Tag";

function BlogCard({ post }) {
  return (
    <article className="card blog-card">
      {post.image && (
        <div className="blog-card__image">
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <div className="blog-card__meta">
        <span>{post.category}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <h3 className="blog-card__title">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>

      <p className="blog-card__excerpt">{post.excerpt}</p>

      {post.tags?.length > 0 && (
        <div className="tags-wrap">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        Read More →
      </Link>
    </article>
  );
}

export default BlogCard;