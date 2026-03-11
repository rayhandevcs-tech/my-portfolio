import { blogPosts } from "./blogPosts";

export const blogCategories = [
  "All",
  ...new Set(blogPosts.map((post) => post.category)),
];