import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardStats } from "../../services/api/dashboardApi";
import AdminViewsChart from "../../components/admin/AdminViewsChart/AdminViewsChart";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        setError("");
        const data = await getDashboardStats();
        setStats(data);
      } catch (err) {
        setError(err.message || "Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return (
    <main className="admin-dashboard-page">
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Overview of your portfolio platform activity.</p>
          </div>
        </div>

        {loading && <p>Loading stats...</p>}
        {error && <p className="admin-dashboard-error">{error}</p>}

        {!loading && !error && stats && (
          <>
            <div className="admin-stats-grid">
              <article className="admin-stat-card">
                <h2>Total Posts</h2>
                <p>{stats.totalPosts}</p>
              </article>

              <article className="admin-stat-card">
                <h2>Featured Posts</h2>
                <p>{stats.featuredPosts}</p>
              </article>

              <article className="admin-stat-card">
                <h2>Total Messages</h2>
                <p>{stats.totalMessages}</p>
              </article>

              <article className="admin-stat-card">
                <h2>Total Views</h2>
                <p>{stats.totalViews}</p>
              </article>
            </div>

            <div className="admin-dashboard-panels">
              <section className="admin-panel-card">
                <h3>Most Viewed Post</h3>

                {stats.mostViewedPost ? (
                  <div className="admin-most-viewed">
                    <p className="admin-most-viewed__title">
                      {stats.mostViewedPost.title}
                    </p>
                    <p>{stats.mostViewedPost.views} views</p>

                    <Link to={`/blog/${stats.mostViewedPost.slug}`}>
                      View Public Post
                    </Link>
                  </div>
                ) : (
                  <p>No post data available yet.</p>
                )}
              </section>

              <section className="admin-panel-card">
                <h3>Quick Actions</h3>
                <div className="admin-quick-links">
                  <Link to="/admin/posts">Manage Posts</Link>
                  <Link to="/admin/posts/new">Create New Post</Link>
                  <Link to="/admin/messages">View Messages</Link>
                  <Link to="/blog">Open Blog</Link>
                </div>
              </section>
            </div>

            <section className="admin-panel-card admin-chart-panel">
              <h3>Top Viewed Posts</h3>
              <AdminViewsChart data={stats.topViewedPosts} />
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default AdminDashboard;