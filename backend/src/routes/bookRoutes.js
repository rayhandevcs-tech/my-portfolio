import express from "express";
import {
  createBook,
  deleteBook,
  getAdminBooks,
  getAllBooks,
  getBookById,
  getBookBySlug,
  toggleFeaturedBook,
  updateBook,
} from "../controllers/bookController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/slug/:slug", getBookBySlug);

router.get("/admin/all", protectAdmin, getAdminBooks);
router.get("/:id", protectAdmin, getBookById);

router.post("/", protectAdmin, createBook);
router.put("/:id", protectAdmin, updateBook);
router.patch("/:id/featured", protectAdmin, toggleFeaturedBook);
router.delete("/:id", protectAdmin, deleteBook);

export default router;