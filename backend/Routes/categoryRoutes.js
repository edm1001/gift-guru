const express = require("express");
const router = express.Router();
const Category = require("../Model/Category");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().populate("subcategories").lean();
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router; 
