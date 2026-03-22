import { useMemo, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import { useBookReview } from "../../hooks/useBookReview";
import { useRelatedBooks } from "../../hooks/useRelatedBooks";

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

  if (bookLoading) {
    return (
      <main className="section">
        <p>Loading book review...</p>
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

  if (notFound || !book) {
    return (
      <main className="section">
        <p>Book review not found.</p>
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

      <main className="section">
        <PageHero title={book.title} subtitle={book.excerpt} />

        <div className="container">
          <div style={{ marginBottom: "1rem" }}>
            <button type="button" onClick={() => navigate(-1)}>
              ← Back
            </button>
          </div>

          {book.coverImage && (
            <div style={{ marginBottom: "1.5rem" }}>
              <img
                src={book.coverImage}
                alt={book.title}
                loading="lazy"
                style={{ maxWidth: "320px", width: "100%", borderRadius: "12px" }}
              />
            </div>
          )}

          <div style={{ marginBottom: "1.5rem" }}>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Rating:</strong> {book.rating}/5</p>
            <p><strong>Published:</strong> {book.publishedAt}</p>
          </div>

          <article className="markdown-content" style={{ marginBottom: "2rem" }}>
            <Suspense fallback={<p>Loading review content...</p>}>
              <ReactMarkdown>{book.review}</ReactMarkdown>
            </Suspense>
          </article>

          <section>
            <h2>Related Books</h2>

            {relatedLoading ? (
              <p>Loading related books...</p>
            ) : relatedList.length === 0 ? (
              <p>No related books found.</p>
            ) : (
              <div style={{ display: "grid", gap: "1rem" }}>
                {relatedList.map((item) => (
                  <div
                    key={item._id || item.slug}
                    style={{
                      padding: "1rem",
                      border: "1px solid var(--border-color, #ddd)",
                      borderRadius: "12px",
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default BookReviewDetails;