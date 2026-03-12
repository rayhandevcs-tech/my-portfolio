import express from "express";
import {
  getContactMessages,
  submitContactMessage,
} from "../controllers/contactController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protectAdmin, getContactMessages);
router.post("/", submitContactMessage);

export default router;