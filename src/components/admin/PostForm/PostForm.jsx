import { useEffect, useRef, useState } from "react";
import { uploadCoverImage } from "../../../services/api/uploadApi";
import ReactMarkdown from "react-markdown";
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

  const contentTextareaRef = useRef(null);
  const inlineImageInputRef = useRef(null);

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
      event.target.value = "";
    }
  }

  function insertAtCursor(snippet) {
    const textarea = contentTextareaRef.current;

    if (!textarea) {
      setFormData((prev) => ({
        ...prev,
        content: `${prev.content}${snippet}`,
      }));
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentContent = formData.content || "";

    const newContent =
      currentContent.slice(0, start) +
      snippet +
      currentContent.slice(end);

    setFormData((prev) => ({
      ...prev,
      content: newContent,
    }));

    requestAnimationFrame(() => {
      textarea.focus();
      const cursorPosition = start + snippet.length;
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    });
  }

  function wrapSelectedText(before, after = before, fallback = "text") {
    const textarea = contentTextareaRef.current;

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentContent = formData.content || "";
    const selectedText = currentContent.slice(start, end) || fallback;

    const replacement = `${before}${selectedText}${after}`;

    const newContent =
      currentContent.slice(0, start) +
      replacement +
      currentContent.slice(end);

    setFormData((prev) => ({
      ...prev,
      content: newContent,
    }));

    requestAnimationFrame(() => {
      textarea.focus();
      const selectionStart = start + before.length;
      const selectionEnd = selectionStart + selectedText.length;
      textarea.setSelectionRange(selectionStart, selectionEnd);
    });
  }

  function addHeading() {
    wrapSelectedText("## ", "", "New Section Heading");
  }

  function addSubheading() {
    wrapSelectedText("### ", "", "Small Heading");
  }

  function addBoldText() {
    wrapSelectedText("**", "**", "bold text");
  }

  function addItalicText() {
    wrapSelectedText("*", "*", "italic text");
  }

  function addQuote() {
    wrapSelectedText("> ", "", "Write your quote here");
  }

  function addBulletList() {
    insertAtCursor("\n- First point\n- Second point\n- Third point\n");
  }

  function addNumberedList() {
    insertAtCursor("\n1. First item\n2. Second item\n3. Third item\n");
  }

  function addImageMarkdown() {
    insertAtCursor("\n![Image alt text](https://image-url-here)\n");
  }

  function addDivider() {
    insertAtCursor("\n---\n");
  }

  function triggerInlineImageUpload() {
    inlineImageInputRef.current?.click();
  }

  async function handleInlineImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      setUploadError("");

      const result = await uploadCoverImage(file);

      const textarea = contentTextareaRef.current;

      if (!textarea) {
        setFormData((prev) => ({
          ...prev,
          content: `${prev.content}\n\n![Image alt text](${result.url})\n\n`,
        }));
        return;
      }

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentContent = formData.content || "";
      const snippet = `\n![Image alt text](${result.url})\n`;

      const newContent =
        currentContent.slice(0, start) +
        snippet +
        currentContent.slice(end);

      setFormData((prev) => ({
        ...prev,
        content: newContent,
      }));

      requestAnimationFrame(() => {
        textarea.focus();
        const cursorPosition = start + snippet.length;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
      });
    } catch (error) {
      setUploadError(error.message || "Failed to upload inline image");
    } finally {
      setUploadingImage(false);
      event.target.value = "";
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

        <div className="post-form-toolbar">
          <button type="button" onClick={addHeading}>
            H2
          </button>
          <button type="button" onClick={addSubheading}>
            H3
          </button>
          <button type="button" onClick={addBoldText}>
            Bold
          </button>
          <button type="button" onClick={addItalicText}>
            Italic
          </button>
          <button type="button" onClick={addQuote}>
            Quote
          </button>
          <button type="button" onClick={addBulletList}>
            Bullet List
          </button>
          <button type="button" onClick={addNumberedList}>
            Numbered List
          </button>
          <button type="button" onClick={addImageMarkdown}>
            Image
          </button>
          <button type="button" onClick={triggerInlineImageUpload}>
            Upload Inline Image
          </button>
          <button type="button" onClick={addDivider}>
            Divider
          </button>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={inlineImageInputRef}
          onChange={handleInlineImageUpload}
          style={{ display: "none" }}
        />

        <textarea
          id="content"
          name="content"
          rows="12"
          value={formData.content}
          onChange={handleChange}
          ref={contentTextareaRef}
          required
        />

        <div className="post-form-preview-markdown">
          <h3>Live Preview</h3>
          <div className="post-form-preview-box markdown-content">
            <ReactMarkdown>
              {formData.content || "Nothing to preview yet."}
            </ReactMarkdown>
          </div>
        </div>
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