import e from 'express';
import mongoose from 'mongoose';

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
});

// const Subcategory = mongoose.model("Subcategory", subcategorySchema);
// module.exports = Subcategory;
export default mongoose.model("Subcategory", subcategorySchema);