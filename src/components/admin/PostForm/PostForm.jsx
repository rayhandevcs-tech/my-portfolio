import { useEffect, useState } from "react";
import { uploadCoverImage } from "../../../services/api/uploadApi";
import "./PostForm.css";

const initialFormState = {
  title: "",
  slug: "",
  category: "",
  tags: "",
  excerpt: "",
  content: "",
  coverImage: "",
  readingTime: "",
  publishedAt: "",
  author: "Md Rayhan",
  featured: false,
  status: "draft",
};

function PostForm({ initialValues, onSubmit, submitting, submitLabel }) {
  const [formData, setFormData] = useState(initialFormState);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    if (initialValues) {
      setFormData({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        category: initialValues.category || "",
        tags: Array.isArray(initialValues.tags)
          ? initialValues.tags.join(", ")
          : "",
        excerpt: initialValues.excerpt || "",
        content: initialValues.content || "",
        coverImage: initialValues.coverImage || "",
        readingTime: initialValues.readingTime || "",
        publishedAt: initialValues.publishedAt || "",
        author: initialValues.author || "Md Rayhan",
        featured: Boolean(initialValues.featured),
        status: initialValues.status || "draft",
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

    const payload = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    onSubmit(payload);
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="post-form-grid">
        <div className="post-form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="post-form-group">
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>

        <div className="post-form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="post-form-group">
          <label htmlFor="tags">Tags (comma separated)</label>
          <input
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="post-form-group">
          <label htmlFor="readingTime">Reading Time</label>
          <input
            id="readingTime"
            name="readingTime"
            value={formData.readingTime}
            onChange={handleChange}
          />
        </div>

        <div className="post-form-group">
          <label htmlFor="publishedAt">Published Date</label>
          <input
            id="publishedAt"
            name="publishedAt"
            type="date"
            value={formData.publishedAt}
            onChange={handleChange}
          />
        </div>

        <div className="post-form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div className="post-form-group">
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

        <div className="post-form-group">
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

      <div className="post-form-group">
        <label htmlFor="coverUpload">Upload Cover Image</label>
        <input
          id="coverUpload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {uploadingImage && <p>Uploading image...</p>}
        {uploadError && <p className="post-form-error">{uploadError}</p>}
      </div>

      {formData.coverImage && (
        <div className="post-form-preview">
          <p>Image Preview</p>
          <img src={formData.coverImage} alt="Cover preview" />
        </div>
      )}

      <div className="post-form-group">
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

      <div className="post-form-group">
        <label htmlFor="content">Content (Markdown supported)</label>
        <textarea
          id="content"
          name="content"
          rows="12"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <label className="post-form-checkbox">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
        />
        Featured post
      </label>

      <button type="submit" className="post-form-submit" disabled={submitting}>
        {submitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}

export default PostForm;