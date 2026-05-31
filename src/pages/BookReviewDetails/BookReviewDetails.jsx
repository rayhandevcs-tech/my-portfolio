import { useMemo, lazy, Suspense } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Seo from "../../components/common/Seo/Seo";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import { useBookReview } from "../../hooks/useBookReview";
import { useRelatedBooks } from "../../hooks/useRelatedBooks";
import { optimizeCloudinaryImage } from "../../utils/optimizeCloudinaryImage";
import "./BookReviewDetails.css";

const ReactMarkdown = lazy(() => import("react-markdown"));

function BookReviewDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { book, loading: bookLoading, error, notFound } = useBookReview(slug);
  const { relatedBooks, loading: relatedLoading } = useRelatedBooks(slug, 2);

  const relatedList = useMemo(() => relatedBooks || [], [relatedBooks]);

  const formattedPublishedDate = useMemo(() => {
    if (!book?.publishedAt) return "Not available";
    const date = new Date(book.publishedAt);
    if (Number.isNaN(date.getTime())) return book.publishedAt;
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }, [book?.publishedAt]);

  const renderRatingStars = (rating) => {
    const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
    return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
  };

  if (bookLoading) {
    return (
      <main className="book-state">
        <div className="state-icon">⏳</div>
        <h2>Loading review...</h2>
        <p>Please wait while the review is being loaded.</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="book-state">
        <div className="state-icon">⚠️</div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button type="button" className="back-btn" onClick={() => navigate("/book-reviews")}>
          ← Back to Books
        </button>
      </main>
    );
  }

  if (notFound || !book) {
    return (
      <main className="book-state">
        <div className="state-icon">🔍</div>
        <h2>Review not found</h2>
        <p>The review you are looking for does not exist or may have moved.</p>
        <button type="button" className="back-btn" onClick={() => navigate("/book-reviews")}>
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
        image={optimizeCloudinaryImage(book.coverImage || "/images/og-default.jpg", 1200)}
        url={`https://rayhancsdev.vercel.app/book-reviews/${book.slug}`}
        type="article"
      />

      <main className="book-page">
        <div className="book-layout">

          {/* ── Back button ── */}
          <div className="book-back-wrap">
            <button type="button" className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
              ← Back to Blog
            </button>
          </div>

          <div className="book-hero">

            {/* ── Cover ── */}
            {book.coverImage && (
              <div className="book-cover">
                <img
                  src={optimizeCloudinaryImage(book.coverImage, 600)}
                  alt={book.title}
                  loading="lazy"
                  className="book-cover__img"
                />
              </div>
            )}

            {/* ── Title + meta ── */}
            <div className="book-hero__info">
              {book.category && (
                <span className="book-badge">{book.category}</span>
              )}

              <h1 className="book-title">{book.title}</h1>

              <div className="book-meta">
                <div className="book-meta__item">
                  <span className="book-meta__label">Author</span>
                  <span className="book-meta__value">{book.author || "Unknown"}</span>
                </div>
                <div className="book-meta__item">
                  <span className="book-meta__label">Rating</span>
                  <span className="book-meta__value">
                    <span className="book-stars">{renderRatingStars(book.rating)}</span>
                    <span className="book-rating-val">{book.rating || 0}/5</span>
                  </span>
                </div>
                <div className="book-meta__item">
                  <span className="book-meta__label">Published</span>
                  <span className="book-meta__value">{formattedPublishedDate}</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Review content ── */}
          <article className="markdown-content book-article">
            <Suspense fallback={<p className="content-loading">Loading review...</p>}>
              <ReactMarkdown>{book.review}</ReactMarkdown>
            </Suspense>
          </article>

          {/* ── Related books ── */}
          {!relatedLoading && relatedList.length > 0 && (
            <section className="related-books">
              <p className="related-books__label">More Reviews</p>
              <div className="related-books__grid">
                {relatedList.map((item) => (
                  <article key={item._id || item.slug} className="related-book-card">
                    {item.coverImage && (
                      <Link to={`/book-reviews/${item.slug}`} className="related-book-card__img-wrap">
                        <img
                          src={optimizeCloudinaryImage(item.coverImage, 400)}
                          alt={item.title}
                          className="related-book-card__img"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div className="related-book-card__body">
                      <h3 className="related-book-card__title">
                        <Link to={`/book-reviews/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="related-book-card__excerpt">
                        {item.excerpt || "Read this review to learn more about the book."}
                      </p>
                      <Link to={`/book-reviews/${item.slug}`} className="related-book-card__cta">
                        Read Review →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
    </>
  );
}

export default BookReviewDetails;
