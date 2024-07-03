const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubcategorySchema = new Schema({
  id: Number,
  name: String,
  productIds: [Number],
});

const CategorySchema = new Schema({
  id: Number,
  name: String,
  description: String,
  subcategories: [SubcategorySchema],
});

module.exports = mongoose.model('Category', CategorySchema, 'Categories');
