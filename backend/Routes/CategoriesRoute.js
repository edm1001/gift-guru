const express = require('express');
const router = express.Router();
const Category = require('../Model/Category.js');
const Product = require('../Model/Product.js');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    
    for (let category of categories) {
      for (let subcategory of category.subcategories) {
        const products = await Product.find({ id: { $in: subcategory.productIds } });
        subcategory.products = products;
      }
    }

    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
