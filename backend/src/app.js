import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contactRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many login attempts. Try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many messages sent. Try again after an hour." },
  standardHeaders: true,
  legacyHeaders: false,
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { success: false, message: "Too many requests. Please slow down." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(compression());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:5174",
      "https://rayhancsdev.vercel.app",
      "https://rayns-notes.vercel.app",
      "https://my-portfolio-git-main-rayhandevcs-techs-projects.vercel.app",
      "https://my-portfolio-k0bgg9r5g-rayhandevcs-techs-projects.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(generalLimiter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

app.use("/api/auth", loginLimiter, authRoutes);
app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/notes", noteRoutes);

export default app;