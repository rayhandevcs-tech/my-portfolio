import "./BlogCategoryFilter.css";

function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="blog-category-filter">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={activeCategory === category ? "active" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default BlogCategoryFilter;