import express from "express";
import {
  submitContact,
  getAllMessages,
  deleteMessage,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", getAllMessages);
router.delete("/:id", deleteMessage);

export default router;