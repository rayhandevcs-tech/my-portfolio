import { useNavigate } from "react-router-dom";
import PostForm from "../../components/admin/PostForm/PostForm";
import { createPost } from "../../services/api/blogApi";
import { useState } from "react";
import { ROUTES } from "../../constants/routes";

function AdminPostNew() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleCreatePost(payload) {
    try {
      setSubmitting(true);
      setError("");
      await createPost(payload);
      navigate(ROUTES.ADMIN_POSTS);
    } catch (err) {
      setError(err.message || "Failed to create post");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="admin-post-page">
      <div className="admin-post-container">
        <h1>Create New Post</h1>
        <p>Write and publish a new blog post.</p>
        {error && <p style={{ color: "red", fontWeight: 600 }}>{error}</p>}

        <PostForm
          onSubmit={handleCreatePost}
          submitting={submitting}
          submitLabel="Create Post"
        />
      </div>
    </main>
  );
}

export default AdminPostNew;