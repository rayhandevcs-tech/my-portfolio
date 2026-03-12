import { useState } from "react";
import "./BookReviewCard.css";

function BookReviewCard({ book }) {
  const [expanded, setExpanded] = useState(false);

  if (!book) return null;

  const {
    image,
    title,
    author,
    category,
    rating,
    summary,
    fullReview,
    takeaway,
  } = book;

  return (
    <article className="card book-card">
      {image && (
        <div className="book-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="book-card__body">
        <div className="book-card__top">
          <div className="book-card__heading">
            <h3>{title}</h3>

            {author && (
              <p className="book-card__author">
                by <strong>{author}</strong>
              </p>
            )}
          </div>

          <div className="book-card__meta">
            {category && (
              <span className="book-card__category">{category}</span>
            )}

            {rating && (
              <span className="book-card__rating">{rating}</span>
            )}
          </div>
        </div>

        <p className="book-card__summary">
          {expanded ? fullReview : summary}
        </p>

        {fullReview && (
          <button
            type="button"
            className="book-card__toggle"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        {takeaway && (
          <div className="book-card__takeaway">
            <strong>Key takeaway:</strong>
            <p>{takeaway}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default BookReviewCard;