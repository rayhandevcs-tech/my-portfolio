import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>

        <Link to={`/blog/${post.slug}`} className="blog-card__link">
          Read More
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;