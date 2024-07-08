const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: Number,
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
  linkIds: [ String ],
  affiliateLink: String,
  clicks: Number
}, {
  timestamps: true
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;