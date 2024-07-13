const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  subcategories: [
    {
      id: {type:Number, unique: true},
      name: String,
      productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
    }
  ],
}, {
  timestamps: true
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;