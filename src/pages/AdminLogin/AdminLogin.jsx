import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../services/api/authApi";
import { saveAuth } from "../../utils/auth";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError("");

      const data = await loginAdmin(formData);
      saveAuth(data.token, data.admin);

      navigate("/admin/posts");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <h1>Admin Login</h1>
        <p>Login to access the admin dashboard.</p>

        {error && <p className="admin-login-error">{error}</p>}

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="admin-login-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-login-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;