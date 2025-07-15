import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  date: { type: Date, default: Date.now },
  image: String,
  description: String,
  affiliateLink: String,
});

export default mongoose.model("Post", postSchema);
