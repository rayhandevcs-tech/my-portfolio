import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useBlogPost } from "../../hooks/useBlogPost";
import PageHero from "../../components/common/PageHero/PageHero";
import "./BlogDetails.css";

function BlogDetails() {
  const { slug } = useParams();
  const { post, loading, error, notFound } = useBlogPost(slug);

  if (loading) {
    return <main className="section"><p>Loading post...</p></main>;
  }

  if (error) {
    return <main className="section"><p>{error}</p></main>;
  }

  if (notFound || !post) {
    return <main className="section"><p>Post not found.</p></main>;
  }

  return (
    <main className="blog-details-page">
      <PageHero title={post.title} subtitle={post.excerpt} />

      <section className="blog-details-content section">
        <div className="blog-details-meta">
          <p><strong>Category:</strong> {post.category}</p>
          <p><strong>Published:</strong> {post.publishedAt}</p>
          <p><strong>Reading Time:</strong> {post.readingTime}</p>
        </div>

        <article className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default BlogDetails;