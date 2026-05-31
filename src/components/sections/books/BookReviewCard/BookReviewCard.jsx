import { Link } from "react-router-dom";
import { optimizeCloudinaryImage } from "../../../../utils/optimizeCloudinaryImage";
import "./BookReviewCard.css";

function BookReviewCard({ book }) {
  if (!book) return null;

  const { title, author, category, rating, coverImage, excerpt, publishedAt, slug } = book;

  const renderStars = (value) => {
    const safeRating = Math.max(0, Math.min(5, Number(value) || 0));
    return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
  };

  return (
    <article className="book-review-card">
      {coverImage && (
        <Link
          to={`/book-reviews/${slug}`}
          className="book-review-card__img-wrap"
          aria-label={`Open review for ${title}`}
        >
          <img
            src={optimizeCloudinaryImage(coverImage, 500)}
            alt={title}
            loading="lazy"
            className="book-review-card__img"
          />
        </Link>
      )}

      <div className="book-review-card__body">
        <div className="book-review-card__top">
          {category && <span className="book-review-card__category">{category}</span>}
          {publishedAt && <span className="book-review-card__date">{publishedAt}</span>}
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
          <div className="book-review-card__rating">
            <span className="book-review-card__stars">{renderStars(rating)}</span>
            <span className="book-review-card__rating-val">{rating}/5</span>
          </div>
        )}

        {excerpt && <p className="book-review-card__excerpt">{excerpt}</p>}

        <div className="book-review-card__footer">
          <Link to={`/book-reviews/${slug}`} className="book-review-card__read">
            Read Full Review →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BookReviewCard;
