export function getRelatedBooks(allBooks, currentBook, limit = 3) {
  if (!Array.isArray(allBooks) || !currentBook) return [];

  const scoredBooks = allBooks
    .filter((book) => book.slug !== currentBook.slug)
    .map((book) => {
      let score = 0;

      if (book.category && book.category === currentBook.category) {
        score += 3;
      }

      if (
        book.author &&
        currentBook.author &&
        book.author === currentBook.author
      ) {
        score += 2;
      }

      return { ...book, _relatedScore: score };
    })
    .filter((book) => book._relatedScore > 0)
    .sort((a, b) => b._relatedScore - a._relatedScore);

  return scoredBooks.slice(0, limit);
}