import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    coverImage: {
      type: String,
      default: "",
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    review: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    publishedAt: {
      type: String,
      default: () => new Date().toISOString().slice(0, 10),
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.index({ slug: 1 });
bookSchema.index({ status: 1 });
bookSchema.index({ category: 1 });
bookSchema.index({ author: 1 });
bookSchema.index({ featured: 1 });
bookSchema.index({ publishedAt: -1 });
bookSchema.index({ status: 1, slug: 1 });
bookSchema.index({ status: 1, category: 1, publishedAt: -1 });

export const Book = mongoose.model("Book", bookSchema);