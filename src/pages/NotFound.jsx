import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p className="page-intro">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;