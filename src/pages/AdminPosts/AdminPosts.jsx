import { Link } from "react-router-dom";
import "./AdminPosts.css";
import { useAdminPosts } from "../../hooks/useAdminPosts";

function AdminPosts() {
  const { posts, loading, error, deletePostById, toggleFeaturedById } =
    useAdminPosts();

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    try {
      await deletePostById(id);
    } catch (error) {
      alert(error.message || "Failed to delete post");
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
    <main className="admin-posts-page">
      <div className="admin-posts-container">
        <div className="admin-posts-header">
          <div>
            <h1>Admin Posts</h1>
            <p>Manage your blog posts from here.</p>
          </div>

          <Link to="/admin/posts/new" className="admin-create-btn">
            Add New Post
          </Link>
        </div>

        {loading && <p>Loading posts...</p>}
        {error && <p className="admin-posts-error">{error}</p>}

        {!loading && !error && posts.length === 0 && <p>No posts found.</p>}

        {!loading && !error && posts.length > 0 && (
          <div className="admin-posts-table-wrapper">
            <table className="admin-posts-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Slug</th>
                  <th>Featured</th>
                  <th>Published</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{post.status || "Published"}</td>
                    <td>{post.views ?? 0}</td>
                    <td>{post.slug}</td>
                    <td>{post.featured ? "Yes" : "No"}</td>
                    <td>
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="admin-actions-cell">
                      <Link
                        to={`/admin/posts/edit/${post._id}`}
                        className="admin-action-btn"
                      >
                        Edit
                      </Link>

                      <button
                        type="button"
                        className="admin-action-btn"
                        onClick={() => handleToggleFeatured(post._id)}
                      >
                        Toggle Featured
                      </button>

                      <button
                        type="button"
                        className="admin-action-btn danger"
                        onClick={() => handleDelete(post._id)}
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

export default AdminPosts;