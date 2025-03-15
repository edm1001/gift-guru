const mongoose = require("mongoose");
const Product = require("../Model/Product.js");
require("dotenv").config();



const products = [
  {
    name: "DIY Crafting Kit",
    description: "A perfect kit for craft lovers to create their own handmade projects.",
    price: 39.99,
    affiliate_link: "https://example.com/product/diy-crafting-kit",
    image: "https://example.com/images/diy-crafting-kit.jpg",
    category: ["Hobby", "Adults"], 
    subcategory: ["Arts & Crafts", "Luxury"], 
    tags: ["creative", "DIY lover", "budget-friendly"]
  },
  {
    name: "Eco-Friendly Reusable Water Bottle",
    description: "A stylish, insulated water bottle to keep drinks cold or hot.",
    price: 29.99,
    affiliate_link: "https://example.com/product/reusable-water-bottle",
    image: "https://example.com/images/reusable-water-bottle.jpg",
    category: ["Hobby", "Kids", "Elderly"],
    subcategory: ["Outdoors", "Comfort", "Health & Wellness"],
    tags: ["eco-friendly", "hydration", "travel", "budget-friendly", "functional"]
  },
  {
    name: "Personalized Name Necklace",
    description: "A beautiful custom-made name necklace, perfect as a gift.",
    price: 59.99,
    affiliate_link: "https://example.com/product/personalized-name-necklace",
    image: "https://example.com/images/personalized-name-necklace.jpg",
    category: ["Events", "Adults"],
    subcategory: ["Wedding Gifts", "Luxury"],
    tags: ["jewelry", "sentimental", "customizable", "premium", "aesthetic"]
  },
  {
    name: "STEM Robotics Kit for Kids",
    description: "A fun and educational robotics kit to introduce kids to programming and engineering.",
    price: 129.99,
    affiliate_link: "https://example.com/product/stem-robotics-kit",
    image: "https://example.com/images/stem-robotics-kit.jpg",
    category: ["Kids", "Hobby"],
    subcategory: ["Educational", "Arts & Crafts"],
    tags: ["STEM", "learning", "fun", "functional", "gift"]
  },
  {
    name: "Massage Gun for Muscle Recovery",
    description: "A high-performance massage gun for deep tissue relaxation and recovery.",
    price: 199.99,
    affiliate_link: "https://example.com/product/massage-gun",
    image: "https://example.com/images/massage-gun.jpg",
    category: ["Adults", "Elderly"],
    subcategory: ["Personal Care", "Health & Wellness"],
    tags: ["relaxation", "self-care", "premium", "functional", "gift"]
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected, inserting products...");
    await Product.deleteMany({}); 
    await Product.insertMany(products);
    console.log("Products inserted!");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
