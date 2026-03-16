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
      min: 1,
      max: 5,
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
      default: "draft",
    },
    publishedAt: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);