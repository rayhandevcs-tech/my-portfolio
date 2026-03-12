import { useEffect, useState } from "react";
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
};

function PostForm({ initialValues, onSubmit, submitting, submitLabel }) {
  const [formData, setFormData] = useState(initialFormState);

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
          <label htmlFor="coverImage">Cover Image</label>
          <input
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
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
      </div>

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