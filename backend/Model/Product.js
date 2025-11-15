import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  affiliateLink: { type: String, required: true },
  image: [{ type: String, required: true }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }],
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subcategory", required: true }],
  tags: {  type: [String],  required: false },
  quizTags: { type: [String], default: [] },
}, {timestamps: true});

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product;
export default mongoose.model("Product", productSchema);