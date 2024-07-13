const express = require('express');
const router = express.Router();
const Category = require('../Model/Category');
const Product = require('../Model/Product');
const mongoose = require('mongoose');

// Get all categories
router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Mongoose is not connected');
    }

    console.log("Fetching categories...");
    const categories = await Category.find().lean();

    console.log("Categories fetched:", categories);

    if (!categories.length) {
      return res.status(404).send('No categories found');
    }

    for (let category of categories) {
      for (let subcategory of category.subcategories) {
        console.log(`Fetching products for subcategory: ${subcategory.name} with IDs ${subcategory.productIds}`);
        const products = await Product.find({ _id: { $in: subcategory.productIds } }).lean();
        subcategory.productIds = products;
      }
    }
    console.log("Categories fetched successfully");
    res.json(categories);
  } catch (err) {
    console.error('Error fetching categories:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;