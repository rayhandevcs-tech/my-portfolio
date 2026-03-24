import { useMemo, lazy, Suspense } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import { useBookReview } from "../../hooks/useBookReview";
import { useRelatedBooks } from "../../hooks/useRelatedBooks";
import "./BookReviewDetails.css";

const ReactMarkdown = lazy(() => import("react-markdown"));

function BookReviewDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const {
    book,
    loading: bookLoading,
    error,
    notFound,
  } = useBookReview(slug);

  const {
    relatedBooks,
    loading: relatedLoading,
  } = useRelatedBooks(slug, 2);

  const relatedList = useMemo(() => relatedBooks || [], [relatedBooks]);

  const publishedAt = book?.publishedAt;

  const formattedPublishedDate = (() => {
    if (!publishedAt) return "Not available";

    const date = new Date(publishedAt);

    if (Number.isNaN(date.getTime())) {
      return publishedAt;
    }

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  })();

  const renderRatingStars = (rating) => {
    const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
    const fullStars = "★".repeat(safeRating);
    const emptyStars = "☆".repeat(5 - safeRating);
    return `${fullStars}${emptyStars}`;
  };

  if (bookLoading) {
    return (
      <main className="book-review-details-state">
        <h2>Loading book review...</h2>
        <p>Please wait while the review is being loaded.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="book-review-details-state">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button
          type="button"
          className="details-back-btn"
          onClick={() => navigate("/books")}
        >
          ← Back to Books
        </button>
      </main>
    );
  }

  if (notFound || !book) {
    return (
      <main className="book-review-details-state">
        <h2>Book review not found</h2>
        <p>The review you are looking for does not exist or may have moved.</p>
        <button
          type="button"
          className="details-back-btn"
          onClick={() => navigate("/books")}
        >
          ← Back to Books
        </button>
      </main>
    );
  }

  return (
    <>
      <ReadingProgress />

      <Seo
        title={`${book.title} | Book Review | RayhanDev`}
        description={book.excerpt || "Read this book review on RayhanDev."}
        keywords={`${book.category || "books"}, ${book.author || "author"}, book review`}
        image={book.coverImage || "/images/og-default.jpg"}
        url={`https://rayhancsdev.vercel.app/book-reviews/${book.slug}`}
        type="article"
      />

      <main className="book-review-details-page">
        <PageHero title={book.title} subtitle={book.excerpt} compact />

        <section className="book-review-details-content section">
          <div className="details-back-wrap">
            <button
              type="button"
              className="details-back-btn"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              ← Back
            </button>
          </div>

          {book.coverImage && (
            <div className="book-review-details-cover">
              <img
                src={book.coverImage}
                alt={book.title}
                loading="lazy"
                className="book-review-details-cover__image"
              />
            </div>
          )}

          <div className="book-review-details-meta">
            <p>
              <strong>Author:</strong> {book.author || "Unknown"}
            </p>
            <p>
              <strong>Category:</strong> {book.category || "Book Review"}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              <span className="book-review-rating">
                {renderRatingStars(book.rating)}{" "}
                <span className="book-review-rating__value">
                  ({book.rating || 0}/5)
                </span>
              </span>
            </p>
            <p>
              <strong>Published:</strong> {formattedPublishedDate}
            </p>
          </div>

          <article className="markdown-content book-review-details-article">
            <Suspense fallback={<p>Loading review content...</p>}>
              <ReactMarkdown>{book.review}</ReactMarkdown>
            </Suspense>
          </article>

          <section className="related-books-section">
            <div className="related-books-section__header">
              <h2>Related Books</h2>
              <p>You may also enjoy these reviews.</p>
            </div>

            {relatedLoading ? (
              <p>Loading related books...</p>
            ) : relatedList.length === 0 ? (
              <p>No related books found.</p>
            ) : (
              <div className="related-books-grid">
                {relatedList.map((item) => (
                  <article
                    key={item._id || item.slug}
                    className="related-book-card"
                  >
                    {item.coverImage && (
                      <Link
                        to={`/book-reviews/${item.slug}`}
                        className="related-book-card__image-link"
                      >
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="related-book-card__image"
                          loading="lazy"
                        />
                      </Link>
                    )}

                    <div className="related-book-card__content">
                      <h3 className="related-book-card__title">
                        <Link to={`/book-reviews/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="related-book-card__excerpt">
                        {item.excerpt ||
                          "Read this review to learn more about the book."}
                      </p>

                      <Link
                        to={`/book-reviews/${item.slug}`}
                        className="related-book-card__link"
                      >
                        Read Review →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </>
  );
}

export default BookReviewDetails;