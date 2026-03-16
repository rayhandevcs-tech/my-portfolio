import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BookForm from "../../components/admin/BookForm/BookForm";
import { createBook } from "../../services/api/bookApi";

function AdminBookNew() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleCreateBook(payload) {
    try {
      setSubmitting(true);
      setError("");
      await createBook(payload);
      navigate("/admin/books");
    } catch (err) {
      setError(err.message || "Failed to create book review");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <h1 style={{ marginBottom: "1rem" }}>Create Book Review</h1>
      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <BookForm
        onSubmit={handleCreateBook}
        submitting={submitting}
        submitLabel="Create Book Review"
      />
    </main>
  );
}

export default AdminBookNew;