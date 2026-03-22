import express from "express";
import {
  createPost,
  deletePost,
  getAdminPosts,
  getAllPosts,
  getPostById,
  getPostBySlug,
  getPostStats,
  getRelatedPostsBySlug,
  incrementPostViews,
  toggleFeaturedPost,
  updatePost,
} from "../controllers/postController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/slug/:slug", getPostBySlug);
router.get("/slug/:slug/related", getRelatedPostsBySlug);
router.patch("/slug/:slug/view", incrementPostViews);

router.get("/admin/all", protectAdmin, getAdminPosts);
router.get("/stats/summary", protectAdmin, getPostStats);
router.get("/:id", protectAdmin, getPostById);

router.post("/", protectAdmin, createPost);
router.put("/:id", protectAdmin, updatePost);
router.patch("/:id/featured", protectAdmin, toggleFeaturedPost);
router.delete("/:id", protectAdmin, deletePost);

export default router;