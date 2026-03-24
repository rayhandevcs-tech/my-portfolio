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

          {excerpt && <p className="featured-book__excerpt">{excerpt}</p>}
        </div>

        {coverImage && (
          <div className="featured-book__image">
            <img src={coverImage} alt={title} loading="lazy" />
          </div>
        )}

        <div className="featured-book__actions">
          <Link to={`/book-reviews/${slug}`} className="featured-book__btn">
            Read Full Review
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBook;