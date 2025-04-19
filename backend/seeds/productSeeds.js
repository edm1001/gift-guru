const mongoose = require("mongoose");
const Product = require("../Model/Product.js");
const CategoryNames = require("../Model/Category.js");
const SubcategoryNames = require("../Model/Subcategory.js");
const Tag = require("../Model/Tags.js");
require("dotenv").config();

const productData = [
  {
    name: "DIY Crafting Kit",
    description:
      "A perfect kit for craft lovers to create their own handmade projects.",
    price: 39.99,
    affiliate_link: "https://example.com/product/diy-crafting-kit",
    image: ["https://example.com/images/diy-crafting-kit.jpg"],
    categoryNames: ["Tech & Gadgets", "Fashion & Accessories"],
    subcategoryNames: ["Smart Home", "Wearable Tech"],
    tagNames: ["creative", "DIY lover", "budget-friendly", "diy"],
  },
  {
    name: "Eco-Friendly Reusable Water Bottle",
    description:
      "A stylish, insulated water bottle to keep drinks cold or hot.",
    price: 29.99,
    affiliate_link: "https://example.com/product/reusable-water-bottle",
    image: ["https://example.com/images/reusable-water-bottle.jpg"],
    categoryNames: [
      "Tech & Gadgets",
      "Home & Lifestyle",
      "Wellness & Self-Care",
    ],
    subcategoryNames: [
      "Smart Home Essentials",
      "Eco-Friendly Products",
      "Fitness Tech",
    ],
    tagNames: [
      "eco-friendly",
      "hydration",
      "travel",
      "budget-friendly",
      "functional",
    ],
  },
  {
    name: "Personalized Name Necklace",
    description: "A beautiful custom-made name necklace, perfect as a gift.",
    price: 59.99,
    affiliate_link: "https://example.com/product/personalized-name-necklace",
    image: ["https://example.com/images/personalized-name-necklace.jpg"],
    categoryNames: ["Fashion & Accessories", "Home & Lifestyle"],
    subcategoryNames: ["Streetwear & Hype", "Aesthetic Decor"],
    tagNames: [
      "jewelry",
      "sentimental",
      "customizable",
      "premium",
      "aesthetic",
    ],
  },
  {
    name: "STEM Robotics Kit for Kids",
    description:
      "A fun and educational robotics kit to introduce kids to programming and engineering.",
    price: 129.99,
    affiliate_link: "https://example.com/product/stem-robotics-kit",
    image: ["https://example.com/images/stem-robotics-kit.jpg"],
    categoryNames: ["Tech & Gadgets", "Toys & Collectibles"],
    subcategoryNames: ["Educational", "STEM & Educational Toys"],
    tagNames: ["STEM", "learning", "fun", "functional", "gift"],
  },
  {
    name: "Massage Gun for Muscle Recovery",
    description:
      "A high-performance massage gun for deep tissue relaxation and recovery.",
    price: 199.99,
    affiliate_link: "https://example.com/product/massage-gun",
    image: ["https://example.com/images/massage-gun.jpg"],
    categoryNames: ["Wellness & Self-Care", "Home & Lifestyle"],
    subcategoryNames: ["Self-Care Kits", "Personal Care"],
    tagNames: ["relaxation", "self-care", "premium", "functional", "gift"],
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Product.deleteMany({});

    const categories = await CategoryNames.find({});
    const subcategories = await SubcategoryNames.find({});
    const tags = await Tag.find({});

    const products = productData.map((product) => {
      const matchedCategories = categories
        .filter((cat) => product.categoryNames.includes(cat.name))
        .map((cat) => cat._id);

      const matchedSubcategories = subcategories
        .filter((sub) => product.subcategoryNames.includes(sub.name))
        .map((sub) => sub._id);

      const matchedTags = tags
        .filter((tag) => product.tagNames.includes(tag.name))
        .map((tag) => tag._id);

      return {
        name: product.name,
        description: product.description,
        price: product.price,
        affiliate_link: product.affiliate_link,
        image: product.image,
        categories: matchedCategories,
        subcategories: matchedSubcategories,
        tags: matchedTags,
      };
    });

    await Product.insertMany(products);

    console.log("Products inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting products:", err);
    mongoose.connection.close();
  }
};

seedProducts();
