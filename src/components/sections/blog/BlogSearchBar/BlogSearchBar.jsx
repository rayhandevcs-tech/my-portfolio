import "./BlogSearchBar.css";

function BlogSearchBar({ value, onChange }) {
  return (
    <div className="blog-search-bar">
      <input
        type="text"
        placeholder="Search posts by title, category, or tag..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default BlogSearchBar;