import "./BlogHero.css";

function BlogHero() {
  return (
    <section className="blog-hero section">
      <div className="container">
        <p className="eyebrow">Writing</p>
        <h1>Blog & Journal</h1>
        <p className="page-intro blog-hero__text">
          Thoughts, reflections and lessons on tech, self development,
          academic topics and personal growth.
        </p>
      </div>
    </section>
  );
}

export default BlogHero;