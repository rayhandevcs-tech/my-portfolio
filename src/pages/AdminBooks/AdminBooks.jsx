import { Link } from "react-router-dom";
import { useAdminBooks } from "../../hooks/useAdminBooks";
import "./AdminBooks.css";

function AdminBooks() {
  const { books, loading, error, deleteBookById, toggleFeaturedById } =
    useAdminBooks();

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this book review?"
    );
    if (!confirmed) return;

    try {
      await deleteBookById(id);
    } catch (error) {
      alert(error.message || "Failed to delete book review");
    }
  }

  async function handleToggleFeatured(id) {
    try {
      await toggleFeaturedById(id);
    } catch (error) {
      alert(error.message || "Failed to update featured status");
    }
  }

  return (
    <main className="admin-books-page">
      <div className="admin-books-container">
        <div className="admin-books-header">
          <div>
            <h1>Admin Books</h1>
            <p>Manage your book reviews from here.</p>
          </div>

          <Link to="/admin/books/new" className="admin-books-create-btn">
            Add New Book
          </Link>
        </div>

        {loading && <p>Loading books...</p>}
        {error && <p className="admin-books-error">{error}</p>}

        {!loading && !error && books.length === 0 && <p>No books found.</p>}

        {!loading && !error && books.length > 0 && (
          <div className="admin-books-table-wrapper">
            <table className="admin-books-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Featured</th>
                  <th>Published</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {books.map((book) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.rating}/5</td>
                    <td>{book.status}</td>
                    <td>{book.featured ? "Yes" : "No"}</td>
                    <td>{book.publishedAt || "-"}</td>
                    <td className="admin-books-actions">
                      <Link
                        to={`/admin/books/edit/${book._id}`}
                        className="admin-books-action-btn"
                      >
                        Edit
                      </Link>

                      <button
                        type="button"
                        className="admin-books-action-btn"
                        onClick={() => handleToggleFeatured(book._id)}
                      >
                        Toggle Featured
                      </button>

                      <button
                        type="button"
                        className="admin-books-action-btn danger"
                        onClick={() => handleDelete(book._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

export default AdminBooks;