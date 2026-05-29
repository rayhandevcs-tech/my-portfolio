import express from "express";
import { Note } from "../models/Note.js";

const router = express.Router();

// GET all published notes (with pagination)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    const isAdmin = req.query.admin === "true";

    const filter = isAdmin ? {} : { status: "published" };

    const total = await Note.countDocuments(filter);
    const notes = await Note.find(filter)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("title slug excerpt coverImage tags mood publishedAt readingTime status");

    res.json({
      notes,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// GET single note by ID (admin)
router.get("/id/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});




// GET single note by slug
router.get("/:slug", async (req, res) => {
  try {
    const note = await Note.findOne({
      slug: req.params.slug,
      status: "published",
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST create note (admin only)
router.post("/", async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update note (admin only)
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE note (admin only)
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;