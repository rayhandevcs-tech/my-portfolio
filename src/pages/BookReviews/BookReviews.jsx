import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import BookReviewCard from "../../components/sections/books/BookReviewCard/BookReviewCard";
import { useBookReviews } from "../../hooks/useBookReviews";

function BookReviews() {
  const { books, loading, error } = useBookReviews();

  if (loading) {
    return (
      <main className="section">
        <p>Loading book reviews...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <>
      <Seo
        title="Book Reviews | RayhanDev"
        description="Book reviews, notes, and reflections on learning, productivity, mindset, and self-development."
        keywords="book reviews, self development books, developer reading list, productivity books"
        url="https://rayhancsdev.vercel.app/book-reviews"
        type="website"
      />

      <main>
        <PageHero
          title="Book Reviews"
          subtitle="Books that shaped my thinking, learning, and personal growth."
        />

        <section className="section">
          <div className="container">
            {books.length === 0 ? (
              <EmptyState
                title="No book reviews yet"
                message="Book reviews will appear here once they are published."
              />
            ) : (
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {books.map((book) => (
                  <BookReviewCard key={book._id || book.slug} book={book} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default BookReviews;