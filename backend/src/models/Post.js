import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
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
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      default: "Md Rayhan",
    },
    publishedAt: {
      type: String,
      default: "",
    },
    readingTime: {
      type: String,
      default: "",
    },
    views: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

postSchema.index({ slug: 1 });
postSchema.index({ status: 1 });
postSchema.index({ category: 1 });
postSchema.index({ tags: 1 });
postSchema.index({ featured: 1 });
postSchema.index({ views: -1 });
postSchema.index({ publishedAt: -1 });
postSchema.index({ status: 1, slug: 1 });
postSchema.index({ status: 1, category: 1, publishedAt: -1 });

export const Post = mongoose.model("Post", postSchema);