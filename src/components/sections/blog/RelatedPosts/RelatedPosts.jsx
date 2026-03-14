import BlogCard from "../BlogCard/BlogCard";
import "./RelatedPosts.css";

function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related-posts">
      <h2 className="related-posts__title">Related Posts</h2>

      <div className="related-posts__grid">
        {posts.map((post) => (
          <BlogCard key={post._id || post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;