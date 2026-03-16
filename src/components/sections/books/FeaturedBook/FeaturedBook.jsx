import { Link } from "react-router-dom";
import "./FeaturedBook.css";

function FeaturedBook({ book }) {
  if (!book) return null;

  const {
    title,
    author,
    category,
    rating,
    excerpt,
    coverImage,
    slug,
    publishedAt,
  } = book;

  return (
    <section className="featured-book card">
      <div className="featured-book__grid">
        <div className="featured-book__content">
          <p className="featured-book__eyebrow">Featured Book</p>

          <h2>{title}</h2>

          <p className="featured-book__meta">
            {author}
            {category ? ` • ${category}` : ""}
            {publishedAt ? ` • ${publishedAt}` : ""}
            {typeof rating === "number" ? ` • ${rating}/5` : ""}
          </p>

          <p className="featured-book__excerpt">{excerpt}</p>

          <Link to={`/book-reviews/${slug}`} className="btn">
            Read Full Review
          </Link>
        </div>

        {coverImage && (
          <div className="featured-book__image">
            <img src={coverImage} alt={title} />
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedBook;