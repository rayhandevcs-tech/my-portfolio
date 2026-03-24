import { Link } from "react-router-dom";
import "./BookReviewCard.css";

function BookReviewCard({ book }) {
  if (!book) return null;

  const {
    title,
    author,
    category,
    rating,
    coverImage,
    excerpt,
    publishedAt,
    slug,
  } = book;

  const renderStars = (value) => {
    const safeRating = Math.max(0, Math.min(5, Number(value) || 0));
    return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
  };

  return (

    <article className="book-review-card card">

      {coverImage && (
        <Link
          to={`/book-reviews/${slug}`}
          className="book-review-card__image"
          aria-label={`Open review for ${title}`}
        >
          <img src={coverImage} alt={title} loading="lazy" />
        </Link>
      )}

      <div className="book-review-card__content">

        <div className="book-review-card__meta">
          
          {category && <span className="book-review-card__meta-item">{category}</span>}
          {publishedAt && (
            <span className="book-review-card__meta-item book-review-card__meta-item--muted">
              {publishedAt}
            </span>
          )}
        </div>

        <h3 className="book-review-card__title">
          <Link to={`/book-reviews/${slug}`}>{title}</Link>
        </h3>

        <div className="book-review-card__info">
          {author && (
            <p className="book-review-card__author">
              <strong>Author:</strong> {author}
            </p>
          )}

          {typeof rating === "number" && (
            <p className="book-review-card__rating">
              <span className="book-review-card__stars">{renderStars(rating)}</span>
              <span className="book-review-card__rating-value">{rating}/5</span>
            </p>
          )}
        </div>

        {excerpt && <p className="book-review-card__excerpt">{excerpt}</p>}

        <Link to={`/book-reviews/${slug}`} className="book-review-card__link">
          Read Full Review <span aria-hidden="true">→</span>
        </Link>
      </div>

    </article>

  );
}

export default BookReviewCard;