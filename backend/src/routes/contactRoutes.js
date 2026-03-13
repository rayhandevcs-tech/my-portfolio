import express from "express";
import {
  deleteContactMessage,
  getContactMessages,
  getContactStats,
  submitContactMessage,
} from "../controllers/contactController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/stats/summary", protectAdmin, getContactStats);
router.get("/", protectAdmin, getContactMessages);
router.post("/", submitContactMessage);
router.delete("/:id", protectAdmin, deleteContactMessage);

export default router;