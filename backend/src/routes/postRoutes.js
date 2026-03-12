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
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/slug/:slug", getPostBySlug);
router.get("/:id", getPostById);

router.post("/", protectAdmin, createPost);
router.put("/:id", protectAdmin, updatePost);
router.patch("/:id/featured", protectAdmin, toggleFeaturedPost);
router.delete("/:id", protectAdmin, deletePost);

export default router;