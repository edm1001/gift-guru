const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: Number,
  name: String,
  description: String,
  subcategories: [
    {
      id: Number,
      name: String,
      productIds: [Number],
    },
  ],
});

module.exports = mongoose.model('Category', CategorySchema);
