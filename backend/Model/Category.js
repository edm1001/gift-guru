const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubcategorySchema = new Schema({
  id: Number,
  name: String,
  productIds: [Number],
});

const CategorySchema = new Schema({
  _id: Number,
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

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;