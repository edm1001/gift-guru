const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  affiliate_link: { type: String, required: true },
  image: [{ type: String, required: true }],
  tags: {  type: [String],  required: false },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }],
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subcategory", required: true }],
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;