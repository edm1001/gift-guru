const mongoose = require("mongoose");
const Tag = require("./Tags");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  affiliate_link: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag", required: true }],
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;