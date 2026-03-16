

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

  return (
    <article className="book-review-card card">
      {coverImage && (
        <div className="book-review-card__image">
          <img src={coverImage} alt={title} />
        </div>
      )}

      <div className="book-review-card__content">
        <div className="book-review-card__meta">
          {category && <span>{category}</span>}
          {publishedAt && <span>• {publishedAt}</span>}
        </div>

        <h3 className="book-review-card__title">
          <Link to={`/book-reviews/${slug}`}>{title}</Link>
        </h3>

        {author && (
          <p className="book-review-card__author">
            <strong>Author:</strong> {author}
          </p>
        )}

        {typeof rating === "number" && (
          <p className="book-review-card__rating">
            <strong>Rating:</strong> {rating}/5
          </p>
        )}

        {excerpt && <p className="book-review-card__excerpt">{excerpt}</p>}

        <Link to={`/book-reviews/${slug}`} className="book-review-card__link">
          Read Full Review →
        </Link>
      </div>
    </article>
  );
}

export default BookReviewCard;