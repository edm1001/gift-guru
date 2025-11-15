import express from "express";
import Post from "../Model/Post.js";

const router = express.Router();
// TODO:  (later add pagination here)

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;