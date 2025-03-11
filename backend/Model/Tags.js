const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { 
    type: String, 
    required: true, 
    enum: ["category", "subcategory", "budget", "age", "recipient", "occasion", "style", "priority"] 
  } 
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
