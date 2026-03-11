import PageHero from "../components/common/PageHero";
import BookReviewCard from "../components/sections/books/BookReviewCard";
import { bookReviews } from "../data/bookReviews";

function BookReviews() {
  console.log("bookReviews data:", bookReviews);

  return (
    <>
      <PageHero
        eyebrow="Book Reviews"
        title="Books That Shaped My Thinking"
        intro="A growing collection of books I have read, along with short reflections, lessons, and ideas that stayed with me."
      />

      <main className="section">
        <div className="container">
          <p style={{ marginBottom: "20px", fontWeight: "600" }}>
            Total Books: {bookReviews.length}
          </p>

          <div className="card-grid book-reviews-grid">
            {bookReviews.map((book) => (
              <BookReviewCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default BookReviews;