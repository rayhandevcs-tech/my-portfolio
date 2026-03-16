import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../../components/admin/BookForm/BookForm";
import { getBookById, updateBook } from "../../services/api/bookApi";

function AdminBookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBook() {
      try {
        setLoading(true);
        setError("");
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        setError(err.message || "Failed to load book review");
      } finally {
        setLoading(false);
      }
    }

    loadBook();
  }, [id]);

  async function handleUpdateBook(payload) {
    try {
      setSubmitting(true);
      setError("");
      await updateBook(id, payload);
      navigate("/admin/books");
    } catch (err) {
      setError(err.message || "Failed to update book review");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <main><p>Loading book review...</p></main>;

  return (
    <main>
      <h1 style={{ marginBottom: "1rem" }}>Edit Book Review</h1>
      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      {book && (
        <BookForm
          initialValues={book}
          onSubmit={handleUpdateBook}
          submitting={submitting}
          submitLabel="Update Book Review"
        />
      )}
    </main>
  );
}

export default AdminBookEdit;