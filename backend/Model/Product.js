const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  images: [
    {
      url: String,
      alt: String,
    },
  ],
  website: String,
  createdAt: Date,
  company: String,
  linkIds: [
    {
      affiliateLink: String,
      clicks: Number,
    },
  ],
});

module.exports = mongoose.model('Product', ProductSchema, 'Products');