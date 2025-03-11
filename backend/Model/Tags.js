const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  category: { type: [String], required: true },  
  subcategory: {type: [String], required: true }, 
  budget: { type: [String], required: true },    
  age: { type: [String], required: true },
  recipient: { type: [String], required: true }, 
  occasion: { type: [String], required: true },
  style: { type: [String], required: true },  
  priority: { type: [String], required: true },   
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
