import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Seo from "../../components/common/Seo/Seo";
import PageHero from "../../components/common/PageHero/PageHero";
import ReadingProgress from "../../components/common/ReadingProgress/ReadingProgress";
import TableOfContents from "../../components/sections/blog/TableOfContents/TableOfContents";
import RelatedBooks from "../../components/sections/books/RelatedBooks/RelatedBooks";
import { useBookReview } from "../../hooks/useBookReview";
import { useBookReviews } from "../../hooks/useBookReviews";
import { getRelatedBooks } from "../../utils/getRelatedBooks";
import { extractHeadings } from "../../utils/extractHeadings";
import "./BookReviewDetails.css";

function BookReviewDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { book, loading, error, notFound } = useBookReview(slug);
  const { books } = useBookReviews();

  const relatedBooks = useMemo(() => {
    return getRelatedBooks(books, book, 2);
  }, [books, book]);

  const headings = useMemo(() => {
    return extractHeadings(book?.review || "");
  }, [book]);

  if (loading) {
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

      <main className="book-review-details-page">
        <PageHero title={book.title} subtitle={book.excerpt} />

        <section className="book-review-details-content section">
          <div className="details-back-wrap">
            <button
              type="button"
              className="details-back-btn"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>

          <TableOfContents headings={headings} />

          {book.coverImage && (
            <div className="book-review-details-cover">
              <img
                src={book.coverImage}
                alt={book.title}
                className="book-review-details-cover__image"
              />
            </div>
          )}

          <div className="book-review-details-meta">
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Category:</strong> {book.category}
            </p>
            <p>
              <strong>Rating:</strong> {book.rating}/5
            </p>
            <p>
              <strong>Published:</strong> {book.publishedAt}
            </p>
          </div>

          <article className="markdown-content">
            <ReactMarkdown
              components={{
                h2: ({ children }) => {
                  const text = String(children);
                  const matched = headings.find((heading) => heading.text === text);
                  const id = matched?.id || text.toLowerCase().replace(/\s+/g, "-");
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ children }) => {
                  const text = String(children);
                  const matched = headings.find((heading) => heading.text === text);
                  const id = matched?.id || text.toLowerCase().replace(/\s+/g, "-");
                  return <h3 id={id}>{children}</h3>;
                },
              }}
            >
              {book.review}
            </ReactMarkdown>
          </article>

          <RelatedBooks books={relatedBooks} />
        </section>
      </main>
    </>
  );
}

export default BookReviewDetails;