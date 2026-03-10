import "./BookReviewCard.css";

function BookReviewCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-card__body">
        <p className="book-card__category">{book.category}</p>
        <h3>{book.title}</h3>
        <p className="book-card__author">by {book.author}</p>

        <p>
          <strong>Rating:</strong> {book.rating}/5
        </p>

        <p>
          <strong>Summary:</strong> {book.summary}
        </p>

        <p>
          <strong>Takeaway:</strong> {book.takeaway}
        </p>
      </div>
    </article>
  );
}

export default BookReviewCard;