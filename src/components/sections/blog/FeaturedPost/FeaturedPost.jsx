import { Link } from "react-router-dom";
import "./FeaturedPost.css";

function FeaturedPost({ post }) {
  if (!post) return null;

  const {
    title,
    category,
    publishedAt,
    readingTime,
    excerpt,
    slug,
    coverImage,
    views,
  } = post;

  return (
    <section className="blog-featured card">
      <div className="blog-featured__grid">
        <div className="blog-featured__content">
          <p className="eyebrow">Featured Post</p>

          <h2>{title}</h2>

          <p className="blog-featured__meta">
            {category} {publishedAt && "•"} {publishedAt} {readingTime && "•"}{" "}
            {readingTime} {typeof views === "number" && "•"}{" "}
            {typeof views === "number" ? `${views} views` : ""}
          </p>

          <p className="blog-featured__excerpt">{excerpt}</p>

          <Link to={`/blog/${slug}`} className="btn">
            Read Featured Post
          </Link>
        </div>

        {coverImage && (
          <div className="blog-featured__image">
            <img src={coverImage} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedPost;