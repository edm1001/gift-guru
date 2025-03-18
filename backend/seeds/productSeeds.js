const mongoose = require("mongoose");
const Product = require("../Model/Product.js");
const Category = require("../Model/Category.js");
const Subcategory = require("../Model/Subcategory.js");
const Tag = require("../Model/Tags.js");
require("dotenv").config();

const productData = [
  {
    name: "DIY Crafting Kit",
    description: "A perfect kit for craft lovers to create their own handmade projects.",
    price: 39.99,
    affiliate_link: "https://example.com/product/diy-crafting-kit",
    image: "https://example.com/images/diy-crafting-kit.jpg",
    category: ["Tech & Gadgets", "Fashion & Accessories"],
    subcategory: ["Smart Home", "Wearable Tech"],
    tags: ["creative", "DIY lover", "budget-friendly"]
  },
  {
    name: "Eco-Friendly Reusable Water Bottle",
    description: "A stylish, insulated water bottle to keep drinks cold or hot.",
    price: 29.99,
    affiliate_link: "https://example.com/product/reusable-water-bottle",
    image: "https://example.com/images/reusable-water-bottle.jpg",
    category: ["Tech & Gadgets", "Home & Lifestyle", "Wellness & Self-Care"],
    subcategory: ["Smart Home Essentials", "Eco-Friendly Products", "Fitness Tech"],
    tags: ["eco-friendly", "hydration", "travel", "budget-friendly", "functional"]
  },
  {
    name: "Personalized Name Necklace",
    description: "A beautiful custom-made name necklace, perfect as a gift.",
    price: 59.99,
    affiliate_link: "https://example.com/product/personalized-name-necklace",
    image: "https://example.com/images/personalized-name-necklace.jpg",
    category: ["Fashion & Accessories", "Home & Lifestyle"],
    subcategory: ["Streetwear & Hype", "Aesthetic Decor"],
    tags: ["jewelry", "sentimental", "customizable", "premium", "aesthetic"]
  },
  {
    name: "STEM Robotics Kit for Kids",
    description: "A fun and educational robotics kit to introduce kids to programming and engineering.",
    price: 129.99,
    affiliate_link: "https://example.com/product/stem-robotics-kit",
    image: "https://example.com/images/stem-robotics-kit.jpg",
    category: ["Tech & Gadgets", "Toys & Collectibles"],
    subcategory: ["Educational", "STEM & Educational Toys"],
    tags: ["STEM", "learning", "fun", "functional", "gift"]
  },
  {
    name: "Massage Gun for Muscle Recovery",
    description: "A high-performance massage gun for deep tissue relaxation and recovery.",
    price: 199.99,
    affiliate_link: "https://example.com/product/massage-gun",
    image: "https://example.com/images/massage-gun.jpg",
    category: ["Wellness & Self-Care", "Home & Lifestyle"],
    subcategory: ["Self-Care Kits", "Personal Care"],
    tags: ["relaxation", "self-care", "premium", "functional", "gift"]
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Fetch categories, subcategories, and tags from the database
    const categories = await Category.find({});
    const subcategories = await Subcategory.find({});
    const tags = await Tag.find({});

    // Convert names to ObjectIds for each product
    const products = productData.map((product) => {
      return {
        ...product,
        category: categories
          .filter((cat) => product.category.includes(cat.name))
          .map((cat) => cat._id),
        subcategory: subcategories
          .filter((sub) => product.subcategory.includes(sub.name))
          .map((sub) => sub._id),
        tags: tags
          .filter((tag) => product.tags.includes(tag.name))
          .map((tag) => tag._id),
      };
    });

    // Clear existing products and insert new ones
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Products inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting products:", err);
    mongoose.connection.close();
  }
};

seedProducts();
