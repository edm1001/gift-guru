const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  images: [
    {
      url: String,
      alt: String,
    },
  ],
  website: String,
  createdAt: Date,
  company: String,
  linkIds: [String],
  affiliateLink: String,
  clicks: Number
});

const SubcategorySchema = new Schema({
  id: Number,
  name: String,
  productIds: [ProductSchema],
});

const CategorySchema = new Schema({
  id: Number,
  name: String,
  description: String,
  subcategories: [SubcategorySchema],
});

module.exports = mongoose.model('Category', CategorySchema, 'categories');
