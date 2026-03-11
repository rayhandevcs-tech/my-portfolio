import "./BlogCategoryFilter.css";

function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="blog-filter" role="tablist" aria-label="Blog categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`blog-filter__btn ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default BlogCategoryFilter;