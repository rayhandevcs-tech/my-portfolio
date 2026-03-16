import { Book } from "../models/Book.js";

export async function getAllBooks(req, res) {
  try {
    const books = await Book.find({ status: "published" }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch books",
      error: error.message,
    });
  }
}

export async function getAdminBooks(req, res) {
  try {
    const books = await Book.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch admin books",
      error: error.message,
    });
  }
}

export async function getBookBySlug(req, res) {
  try {
    const { slug } = req.params;

    const book = await Book.findOne({ slug, status: "published" });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book review not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch book review",
      error: error.message,
    });
  }
}

export async function getBookById(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book review not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch book review",
      error: error.message,
    });
  }
}

export async function createBook(req, res) {
  try {
    const {
      title,
      slug,
      author,
      category,
      rating,
      coverImage,
      excerpt,
      review,
      featured,
      status,
      publishedAt,
    } = req.body;

    if (!title || !slug || !author || !category || !excerpt || !review) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, author, category, excerpt, and review are required",
      });
    }

    const existingBook = await Book.findOne({ slug });

    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: "A book review with this slug already exists",
      });
    }

    const newBook = await Book.create({
      title,
      slug,
      author,
      category,
      rating: Number(rating) || 5,
      coverImage: coverImage || "",
      excerpt,
      review,
      featured: Boolean(featured),
      status: status === "published" ? "published" : "draft",
      publishedAt: publishedAt || new Date().toISOString().slice(0, 10),
    });

    return res.status(201).json({
      success: true,
      message: "Book review created successfully",
      data: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create book review",
      error: error.message,
    });
  }
}

export async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const {
      title,
      slug,
      author,
      category,
      rating,
      coverImage,
      excerpt,
      review,
      featured,
      status,
      publishedAt,
    } = req.body;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book review not found",
      });
    }

    if (slug && slug !== book.slug) {
      const existingBook = await Book.findOne({ slug });

      if (existingBook) {
        return res.status(400).json({
          success: false,
          message: "A book review with this slug already exists",
        });
      }
    }

    book.title = title ?? book.title;
    book.slug = slug ?? book.slug;
    book.author = author ?? book.author;
    book.category = category ?? book.category;
    book.rating = rating ? Number(rating) : book.rating;
    book.coverImage = coverImage ?? book.coverImage;
    book.excerpt = excerpt ?? book.excerpt;
    book.review = review ?? book.review;
    book.featured = typeof featured === "boolean" ? featured : book.featured;
    book.status =
      status === "published"
        ? "published"
        : status === "draft"
        ? "draft"
        : book.status;
    book.publishedAt = publishedAt ?? book.publishedAt;

    await book.save();

    return res.status(200).json({
      success: true,
      message: "Book review updated successfully",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update book review",
      error: error.message,
    });
  }
}

export async function deleteBook(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book review not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book review deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete book review",
      error: error.message,
    });
  }
}

export async function toggleFeaturedBook(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book review not found",
      });
    }

    book.featured = !book.featured;
    await book.save();

    return res.status(200).json({
      success: true,
      message: "Featured status updated",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to toggle featured status",
      error: error.message,
    });
  }
}