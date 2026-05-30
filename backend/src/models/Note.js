import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
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
    tags: {
      type: [String],
      default: [],
    },
    mood: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    reactions: {
      like: { type: Number, default: 0 },
      love: { type: Number, default: 0 },
      fire: { type: Number, default: 0 },
    },
    featured: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: String,
      default: "",
    },
    readingTime: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.index({ slug: 1 });
noteSchema.index({ status: 1 });
noteSchema.index({ publishedAt: -1 });

export const Note = mongoose.model("Note", noteSchema);