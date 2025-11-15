import express from "express";
import Category from "../Model/Category.js";
import Subcategory from "../Model/Subcategory.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().populate("subcategories").lean();
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate("subcategories").lean();
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error("Error fetching category:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
