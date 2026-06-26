import { useTranslation } from "../../../../hooks/useTranslation";
import "./BlogPagination.css";

function BlogPagination({ currentPage, totalPages, onPageChange }) {
  const t = useTranslation("blog");

  if (totalPages <= 1) return null;

  return (
    <div className="blog-pagination">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t.prev}
      </button>

      <span>
        {t.page} {currentPage} {t.of} {totalPages}
      </span>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t.next}
      </button>
    </div>
  );
}

export default BlogPagination;
