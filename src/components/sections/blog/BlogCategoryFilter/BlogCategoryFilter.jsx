import { useTranslation } from "../../../../hooks/useTranslation";
import "./BlogCategoryFilter.css";

function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }) {
  const t = useTranslation("blog");

  return (
    <div className="blog-category-filter">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={activeCategory === category ? "active" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category === "All" ? t.all : category}
        </button>
      ))}
    </div>
  );
}

export default BlogCategoryFilter;