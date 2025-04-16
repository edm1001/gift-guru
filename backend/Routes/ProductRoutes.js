const express = require('express');
const router = express.Router();
const Product = require('../Model/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).send('Server Error');
  }
});

// Get a single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// use products for quiz
router.post('/quiz', async (req, res) => {
  try {
    const { tags } = req.body;

    if (!tags || !Array.isArray(tags)) {
      return res.status(400).json({ error: 'Tags must be an array' });
    }
    const matchedTags = await Tag.find({ name: { $in: tags } });
    const tagIds = matchedTags.map(tag => tag._id);

    const products = await Product.find({
      tags: { $in: tagIds },
    }).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error in quiz route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports = router;