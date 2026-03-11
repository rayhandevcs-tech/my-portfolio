import "./BlogHero.css";

import PageHero from "../../common/PageHero";

function BlogHero() {
  return (
    <PageHero
      className="blog-hero"
      eyebrow="Blog"
      title="Thoughts, Notes, and Learnings"
      intro="A collection of things I’m learning, building, and reflecting on as I grow my skills in frontend development and beyond."
    />
  );
}

export default BlogHero;