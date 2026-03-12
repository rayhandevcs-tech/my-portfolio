import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getPostBySlug,
  toggleFeaturedPost,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/slug/:slug", getPostBySlug);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.patch("/:id/featured", toggleFeaturedPost);
router.delete("/:id", deletePost);

export default router;