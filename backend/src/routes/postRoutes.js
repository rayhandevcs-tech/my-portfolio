import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getPostBySlug,
  getPostStats,
  incrementPostViews,
  toggleFeaturedPost,
  updatePost,
} from "../controllers/postController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/slug/:slug", getPostBySlug);
router.patch("/slug/:slug/view", incrementPostViews);
router.get("/stats/summary", protectAdmin, getPostStats);
router.get("/stats/summary", protectAdmin, getPostStats);
router.get("/:id", getPostById);

router.post("/", protectAdmin, createPost);
router.put("/:id", protectAdmin, updatePost);
router.patch("/:id/featured", protectAdmin, toggleFeaturedPost);
router.delete("/:id", protectAdmin, deletePost);

export default router;