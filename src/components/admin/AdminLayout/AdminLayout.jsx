import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { clearAuth, getAdminUser } from "../../../utils/auth";
import "./AdminLayout.css";

function AdminLayout() {
  const navigate = useNavigate();
  const admin = getAdminUser();

  function handleLogout() {
    clearAuth();
    navigate("/admin/login");
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <h2>Admin Panel</h2>
          <p>{admin?.name || "Admin"}</p>
        </div>

        <nav className="admin-sidebar__nav">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/posts">Posts</NavLink>
          <NavLink to="/admin/books">Books</NavLink>
          <NavLink to="/admin/posts/new">Create Post</NavLink>
          <NavLink to="/admin/messages">Messages</NavLink>
          <NavLink to="/">Back to Site</NavLink>
        </nav>

        <button
          type="button"
          className="admin-sidebar__logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </aside>

      <section className="admin-layout__content">
        <Outlet />
      </section>
    </div>
  );
}

export default AdminLayout;