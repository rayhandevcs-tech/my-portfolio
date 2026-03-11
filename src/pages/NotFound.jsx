import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";

function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        intro="The page you are looking for does not exist or may have been moved."
      />

      <main className="section">
        <div className="container">
          <div className="empty-state card">
            <h3>Let’s get you back on track</h3>
            <p>You can return to the homepage or continue exploring other sections of the site.</p>

            <div className="notfound-actions">
              <Link to="/" className="btn">
                Go Home
              </Link>
              <Link to="/blog" className="btn btn--secondary">
                Visit Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;