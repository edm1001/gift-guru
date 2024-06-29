// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  categories: [
    {
      id: Number,
      name: String,
      description: String,
      subcategories: [
        {
          id: Number,
          name: String,
          products: [
            {
              id: Number,
              name: String,
              description: String,
              price: Number,
              images: [
                {
                  url: String,
                  alt: String
                }
              ],
              website: String,
              createdAt: Date,
              company: String,
              linkIds: [String]
            }
          ]
        }
      ]
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
