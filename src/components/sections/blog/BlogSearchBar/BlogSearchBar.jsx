function BlogSearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="blog-search">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search blog posts"
      />
    </div>
  );
}

export default BlogSearchBar;