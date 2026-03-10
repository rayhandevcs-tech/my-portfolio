import BookReviewCard from "../components/sections/books/BookReviewCard";
import { bookReviews } from "../data/bookReviews";

function BookReviews() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Books</p>
        <h1>Book Reviews</h1>
        <p className="page-intro">
          Books that influenced my thinking, learning process and personal
          growth. This section includes short reviews, reflections and key
          takeaways.
        </p>

        <div className="card-grid">
          {bookReviews.map((book) => (
            <BookReviewCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default BookReviews;