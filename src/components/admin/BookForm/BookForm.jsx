import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { uploadCoverImage } from "../../../services/api/uploadApi";
import "./BookForm.css";

const initialFormState = {
  title: "",
  slug: "",
  author: "",
  category: "",
  rating: 5,
  coverImage: "",
  excerpt: "",
  review: "",
  featured: false,
  status: "draft",
  publishedAt: "",
};

function BookForm({ initialValues, onSubmit, submitting, submitLabel }) {
  const [formData, setFormData] = useState(initialFormState);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    if (initialValues) {
      setFormData({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        author: initialValues.author || "",
        category: initialValues.category || "",
        rating: initialValues.rating || 5,
        coverImage: initialValues.coverImage || "",
        excerpt: initialValues.excerpt || "",
        review: initialValues.review || "",
        featured: Boolean(initialValues.featured),
        status: initialValues.status || "draft",
        publishedAt: initialValues.publishedAt || "",
      });
    }
  }, [initialValues]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      setUploadError("");

      const result = await uploadCoverImage(file);

      setFormData((prev) => ({
        ...prev,
        coverImage: result.url,
      }));
    } catch (error) {
      setUploadError(error.message || "Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      ...formData,
      rating: Number(formData.rating),
    });
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="book-form-grid">
        <div className="book-form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-group">
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-form-group">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>

        <div className="book-form-group">
          <label htmlFor="publishedAt">Published Date</label>
          <input
            id="publishedAt"
            name="publishedAt"
            type="date"
            value={formData.publishedAt}
            onChange={handleChange}
          />
        </div>

        <div className="book-form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="book-form-group">
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            placeholder="Uploaded image URL will appear here"
          />
        </div>
      </div>

      <div className="book-form-group">
        <label htmlFor="coverUpload">Upload Cover Image</label>
        <input
          id="coverUpload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {uploadingImage && <p>Uploading image...</p>}
        {uploadError && <p className="book-form-error">{uploadError}</p>}
      </div>

      {formData.coverImage && (
        <div className="book-form-preview">
          <p>Image Preview</p>
          <img src={formData.coverImage} alt="Book cover preview" />
        </div>
      )}

      <div className="book-form-group">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows="3"
          value={formData.excerpt}
          onChange={handleChange}
          required
        />
      </div>

      <div className="book-form-group">
        <label htmlFor="review">Review (Markdown supported)</label>
        <textarea
          id="review"
          name="review"
          rows="12"
          value={formData.review}
          onChange={handleChange}
          required
        />
      </div>

      <div className="book-form-markdown-preview">
        <h3>Live Preview</h3>
        <div className="book-form-preview-box markdown-content">
          <ReactMarkdown>
            {formData.review || "Nothing to preview yet."}
          </ReactMarkdown>
        </div>
      </div>

      <label className="book-form-checkbox">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />
        Featured book
      </label>

      <button type="submit" className="book-form-submit" disabled={submitting}>
        {submitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}

export default BookForm;