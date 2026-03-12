import { useState } from "react";
import "./BookReviewCard.css";

function BookReviewCard({ book }) {
  const [expanded, setExpanded] = useState(false);

  return (

    <article className="card book-card">

      {book.image && (
        <div className="book-card__image">
          <img src={book.image} alt={book.title} />
        </div>
      )}

      <div className="book-card__body">

        <div className="book-card__top">

          <div className="book-card__heading">

            <h3>{book.title}</h3>
            <p className="book-card__author">
              by <strong>{book.author}</strong>
            </p>

          </div>

          <div className="book-card__meta">

            {book.category && (
              <span className="book-card__category">{book.category}</span>
            )}
            
            {book.rating && (
              <span className="book-card__rating">{book.rating}</span>
            )}
            
          </div>

        </div>

        <p className="book-card__summary">
          {expanded ? book.fullReview : book.summary}
        </p>

        {book.fullReview && (
          <button
            type="button"
            className="book-card__toggle"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        {book.takeaway && (
          <div className="book-card__takeaway">
            <strong>Key takeaway:</strong>
            <p>{book.takeaway}</p>
          </div>
        )}

      </div>

    </article>
  );
}

export default BookReviewCard;