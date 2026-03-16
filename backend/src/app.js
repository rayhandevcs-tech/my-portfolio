import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://rayhancsdev.vercel.app",
      "https://my-portfolio-git-main-rayhandevcs-techs-projects.vercel.app",
      "https://my-portfolio-k0bgg9r5g-rayhandevcs-techs-projects.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/books", bookRoutes);

export default app;