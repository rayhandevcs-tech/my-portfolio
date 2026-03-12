import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;