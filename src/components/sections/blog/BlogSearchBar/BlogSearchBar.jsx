import "./BlogSearchBar.css";

function BlogSearchBar({ value, onChange, placeholder = "Search posts by title, category, or tag..." }) {
  return (
    <div className="blog-search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default BlogSearchBar;