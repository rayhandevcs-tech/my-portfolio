import BookReviewCard from "../BookReviewCard/BookReviewCard";
import "./RelatedBooks.css";

function RelatedBooks({ books }) {
  if (!books || books.length === 0) return null;

  return (
    <section className="related-books">
      <h2 className="related-books__title">Related Books</h2>

      <div className="related-books__grid">
        {books.map((book) => (
          <BookReviewCard key={book._id || book.slug} book={book} />
        ))}
      </div>
    </section>
  );
}

export default RelatedBooks;