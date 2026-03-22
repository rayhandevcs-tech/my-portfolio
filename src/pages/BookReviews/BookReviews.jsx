import { useEffect, useMemo, useState } from "react";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import BookReviewCard from "../../components/sections/books/BookReviewCard/BookReviewCard";
import FeaturedBook from "../../components/sections/books/FeaturedBook/FeaturedBook";
import BookPagination from "../../components/sections/books/BookPagination/BookPagination";
import { useBookReviews } from "../../hooks/useBookReviews";

const BOOKS_PER_PAGE = 4;

function BookReviews() {
  const {
    regularBooks = [],
    featuredBook = null,
    loading,
    error,
  } = useBookReviews();

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(regularBooks.length / BOOKS_PER_PAGE)
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const endIndex = startIndex + BOOKS_PER_PAGE;
    return regularBooks.slice(startIndex, endIndex);
  }, [regularBooks, currentPage]);

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
            {featuredBook && (
              <div style={{ marginBottom: "2rem" }}>
                <FeaturedBook book={featuredBook} />
              </div>
            )}

            {!featuredBook && regularBooks.length === 0 ? (
              <EmptyState
                title="No book reviews yet"
                message="Book reviews will appear here once they are published."
              />
            ) : (
              <>
                <div style={{ display: "grid", gap: "1.5rem" }}>
                  {paginatedBooks.map((book) => (
                    <BookReviewCard key={book._id || book.slug} book={book} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <BookPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default BookReviews;