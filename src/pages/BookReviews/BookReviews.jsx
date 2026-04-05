import { useEffect, useMemo, useState } from "react";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import BookReviewCard from "../../components/sections/books/BookReviewCard/BookReviewCard";
import FeaturedBook from "../../components/sections/books/FeaturedBook/FeaturedBook";
import BookPagination from "../../components/sections/books/BookPagination/BookPagination";
import { useBookReviews } from "../../hooks/useBookReviews";
import "./BookReviews.css";

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
      <>
        <Seo
          title="Book Reviews | RayhanDev"
          description="Book reviews, notes, and reflections on learning, productivity, mindset, and self-development."
          keywords="book reviews, self development books, developer reading list, productivity books"
          url="https://rayhancsdev.vercel.app/book-reviews"
          type="website"
        />

        <main className="book-reviews-page">
          <PageHero
            title="Book Reviews"
            subtitle="Books that shaped my thinking, learning, and personal growth."
          />

          <section className="book-reviews-page__content section">
            <div className="container">
              <div className="book-skeleton-featured" aria-hidden="true">
                <div className="book-skeleton-featured__image" />
                <div className="book-skeleton-featured__body">
                  <div className="book-skeleton-line book-skeleton-line--sm" />
                  <div className="book-skeleton-line book-skeleton-line--lg" />
                  <div className="book-skeleton-line" />
                  <div className="book-skeleton-line book-skeleton-line--short" />
                </div>
              </div>

              <div className="book-skeleton-list">
                {Array.from({ length: 4 }).map((_, index) => (
                  <article
                    key={index}
                    className="book-skeleton-card"
                    aria-hidden="true"
                  >
                    <div className="book-skeleton-card__image" />
                    <div className="book-skeleton-card__body">
                      <div className="book-skeleton-line book-skeleton-line--sm" />
                      <div className="book-skeleton-line book-skeleton-line--lg" />
                      <div className="book-skeleton-line" />
                      <div className="book-skeleton-line book-skeleton-line--short" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Seo
          title="Book Reviews | RayhanDev"
          description="Book reviews, notes, and reflections on learning, productivity, mindset, and self-development."
          keywords="book reviews, self development books, developer reading list, productivity books"
          url="https://rayhancsdev.vercel.app/book-reviews"
          type="website"
        />

        <main className="book-reviews-page">
          <PageHero
            title="Book Reviews"
            subtitle="Books that shaped my thinking, learning, and personal growth."
          />

          <section className="book-reviews-page__content section">
            <div className="container">
              <EmptyState
                title="Unable to load book reviews"
                message={
                  error || "Something went wrong while loading book reviews."
                }
              />
            </div>
          </section>
        </main>
      </>
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

      <main className="book-reviews-page">
        <PageHero
          title="Book Reviews"
          subtitle="Books that shaped my thinking, learning, and personal growth."
        />

        <section className="book-reviews-page__content section">
          <div className="container">
            {featuredBook && (
              <div className="book-reviews-page__featured">
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
                <div className="book-reviews-list">
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