



import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../components/admin/PostForm/PostForm";
import { getPostById, updatePost } from "../../services/api/blogApi";
import { ROUTES } from "../../constants/routes";

function AdminPostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        setError("");
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        setError(err.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  async function handleUpdatePost(payload) {
    try {
      setSubmitting(true);
      setError("");
      await updatePost(id, payload);
      navigate(ROUTES.ADMIN_POSTS);
    } catch (err) {
      setError(err.message || "Failed to update post");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <main className="admin-post-page"><p>Loading post...</p></main>;
  }

  if (error && !post) {
    return <main className="admin-post-page"><p>{error}</p></main>;
  }

  return (
    <main className="admin-post-page">
      <div className="admin-post-container">
        <h1>Edit Post</h1>
        <p>Update your blog post content.</p>
        {error && <p style={{ color: "red", fontWeight: 600 }}>{error}</p>}

        <PostForm
          initialValues={post}
          onSubmit={handleUpdatePost}
          submitting={submitting}
          submitLabel="Update Post"
        />
      </div>
    </main>
  );
}

export default AdminPostEdit;