// routes/products.js
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
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

