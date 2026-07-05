import { useMemo, lazy, Suspense } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Seo from "../../components/common/Seo/Seo";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import { useBookReview } from "../../hooks/useBookReview";
import { SITE_URL } from "../../data/site";
import { useRelatedBooks } from "../../hooks/useRelatedBooks";
import { optimizeCloudinaryImage } from "../../utils/optimizeCloudinaryImage";
import { useTranslation } from "../../hooks/useTranslation";
import "./BookReviewDetails.css";

const ReactMarkdown = lazy(() => import("react-markdown"));

function BookReviewDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const t = useTranslation("bookReviewDetails");

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
        <h2>{t.loadingTitle}</h2>
        <p>{t.loadingMsg}</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="book-state">
        <div className="state-icon">⚠️</div>
        <h2>{t.errorTitle}</h2>
        <p>{error}</p>
        <button type="button" className="back-btn" onClick={() => navigate("/book-reviews")}>
          {t.backToBooks}
        </button>
      </main>
    );
  }

  if (notFound || !book) {
    return (
      <main className="book-state">
        <div className="state-icon">🔍</div>
        <h2>{t.notFoundTitle}</h2>
        <p>{t.notFoundMsg}</p>
        <button type="button" className="back-btn" onClick={() => navigate("/book-reviews")}>
          {t.backToBooks}
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
        url={`${SITE_URL}/book-reviews/${book.slug}`}
        type="article"
      />

      <main className="book-page">
        <div className="book-layout">

          {/* ── Back button ── */}
          <div className="book-back-wrap">
            <button type="button" className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
              {t.backToBooks}
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
                  <span className="book-meta__label">{t.author}</span>
                  <span className="book-meta__value">{book.author || t.unknown}</span>
                </div>
                <div className="book-meta__item">
                  <span className="book-meta__label">{t.rating}</span>
                  <span className="book-meta__value">
                    <span className="book-stars">{renderRatingStars(book.rating)}</span>
                    <span className="book-rating-val">{book.rating || 0}/5</span>
                  </span>
                </div>
                <div className="book-meta__item">
                  <span className="book-meta__label">{t.published}</span>
                  <span className="book-meta__value">{formattedPublishedDate}</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Review content ── */}
          <article className="markdown-content book-article">
            <Suspense fallback={<p className="content-loading">{t.loadingTitle}</p>}>
              <ReactMarkdown>{book.review}</ReactMarkdown>
            </Suspense>
          </article>

          {/* ── Related books ── */}
          {!relatedLoading && relatedList.length > 0 && (
            <section className="related-books">
              <p className="related-books__label">{t.moreReviews}</p>
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
                        {item.excerpt || t.defaultExcerpt}
                      </p>
                      <Link to={`/book-reviews/${item.slug}`} className="related-book-card__cta">
                        {t.readReview}
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
