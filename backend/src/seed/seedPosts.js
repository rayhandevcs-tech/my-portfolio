import dotenv from "dotenv";
import mongoose from "mongoose";
import Post from "../models/Post.js";

dotenv.config();

const samplePosts = [
  {
    title: "Building My React Portfolio with Vite",
    slug: "building-my-react-portfolio-with-vite",
    excerpt:
      "How I structured and scaled my personal React portfolio project using Vite.",
    content:
      "This is a sample blog post content for the portfolio project. Later, you can replace it with your real blog content from your frontend data.",
    category: "Frontend",
    tags: ["React", "Vite", "Portfolio"],
    image: "",
    readTime: "5 min read",
    featured: true,
    date: "March 2026",
  },
  {
    title: "Why Reusable Components Matter",
    slug: "why-reusable-components-matter",
    excerpt:
      "A short reflection on how reusable components improve scalability.",
    content:
      "Reusable components help reduce duplication, improve maintainability, and make UI systems easier to scale.",
    category: "Frontend",
    tags: ["Components", "Architecture"],
    image: "",
    readTime: "4 min read",
    featured: false,
    date: "March 2026",
  },
];

async function seedPosts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Post.deleteMany();
    await Post.insertMany(samplePosts);

    console.log("Posts seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to seed posts:", error);
    process.exit(1);
  }
}

seedPosts();