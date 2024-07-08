const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  subcategories: [
    {
      id: Number,
      name: String,
      productIds: [ Number ]
    }
  ],
}, {
  timestamps: true
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;