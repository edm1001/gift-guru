const express = require("express");
const Category = require("../Model/Category");
const Subcategory = require("../Model/Subcategory");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().populate("subcategories").lean();
    const subcategories = await Subcategory.find().lean();
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

module.exports = router; 
