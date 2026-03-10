import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function BlogDetails() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="section">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Post not found</h1>
          <p className="page-intro">
            The blog post you are looking for does not exist.
          </p>
          <Link to="/blog" className="btn">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (

    <main className="section">
      
      <div className="container blog-details">

        <p className="eyebrow">{post.category}</p>
        
        <h1>{post.title}</h1>

        <div className="blog-details__meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <div className="blog-details__content">
          <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
        </div>

        <div className="blog-details__actions">
          <Link to="/blog" className="btn">
            Back to Blog
          </Link>
        </div>

      </div>

    </main>
  );
}

export default BlogDetails;