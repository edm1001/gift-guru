const mongoose = require("mongoose");
const Product = require("./Model/Product.js");
require("dotenv").config();

const products = [
  {
    name: "DIY Crafting Kit",
    description: "A perfect kit for craft lovers to create their own handmade projects.",
    price: 39.99,
    affiliate_link: "https://example.com/product/diy-crafting-kit",
    image: "https://example.com/images/diy-crafting-kit.jpg",
    tags: ["hobby", "budget", "friend", "birthday", "adult", "functional"]
  },
  {
    name: "Noise-Canceling Headphones",
    description: "Premium sound quality with active noise cancellation for an immersive experience.",
    price: 149.99,
    affiliate_link: "https://example.com/product/noise-canceling-headphones",
    image: "https://example.com/images/noise-canceling-headphones.jpg",
    tags: ["electronics", "premium", "self", "holiday", "adult", "aesthetic"]
  },
  {
    name: "Self-Help & Productivity Book",
    description: "A motivational guide to improving focus, mindset, and success.",
    price: 24.99,
    affiliate_link: "https://example.com/product/self-help-book",
    image: "https://example.com/images/self-help-book.jpg",
    tags: ["books", "budget", "coworker", "anniversary", "teen", "functional"]
  }
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log("MongoDB Connected, inserting products...");
    await Product.deleteMany({}); 
    await Product.insertMany(products);
    console.log("Products inserted!");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
