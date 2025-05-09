const mongoose = require("mongoose");
const Category = require("../Model/Category.js");
const Subcategory = require("../Model/Subcategory.js");
require("dotenv").config();

const categoriesData = [
  { name: "Fashion & Accessories" },
  { name: "Food & Kitchen" },
  { name: "Home & Lifestyle" },
  { name: "Outdoor & Adventure" },
  { name: "Pop Culture & Geek" },
  { name: "Tech & Gadgets" },
  { name: "Toys & Collectibles" },
  { name: "Wellness & Self-Care" },
];

const subcategoriesData = [
  { name: "Smart Home", category: "Tech & Gadgets" },
  { name: "Wearable Tech", category: "Tech & Gadgets" },
  { name: "Gaming Accessories", category: "Tech & Gadgets" },
  { name: "Phone & Tablet Accessories", category: "Tech & Gadgets" },
  { name: "Unique Inventions", category: "Tech & Gadgets" },

  { name: "Aesthetic Decor", category: "Home & Lifestyle" },
  { name: "Smart Home Essentials", category: "Home & Lifestyle" },
  { name: "Furniture & DIY", category: "Home & Lifestyle" },
  { name: "Pet Gadgets", category: "Home & Lifestyle" },
  { name: "Eco-Friendly Products", category: "Home & Lifestyle" },

  { name: "Tech-Integrated Fashion", category: "Fashion & Accessories" },
  { name: "Streetwear & Hype", category: "Fashion & Accessories" },
  { name: "Handmade Jewelry", category: "Fashion & Accessories" },
  { name: "Bags & Wallets", category: "Fashion & Accessories" },
  { name: "Novelty Wear", category: "Fashion & Accessories" },

  { name: "Camping & Survival", category: "Outdoor & Adventure" },
  { name: "Extreme Sports Gear", category: "Outdoor & Adventure" },
  { name: "Travel Essentials", category: "Outdoor & Adventure" },
  { name: "Water Sports & Fishing", category: "Outdoor & Adventure" },
  { name: "Electric Bikes & Scooters", category: "Outdoor & Adventure" },

  { name: "Action Figures", category: "Toys & Collectibles" },
  { name: "Rare Collectibles", category: "Toys & Collectibles" },
  { name: "Board Games & Puzzles", category: "Toys & Collectibles" },
  { name: "STEM & Educational Toys", category: "Toys & Collectibles" },
  { name: "Fidget & Sensory Toys", category: "Toys & Collectibles" },
  { name: "Smart Health Gadgets", category: "Wellness & Self-Care" },
  { name: "Sleep & Relaxation", category: "Wellness & Self-Care" },
  { name: "Fitness Tech", category: "Wellness & Self-Care" },
  { name: "Aromatherapy & Essential Oils", category: "Wellness & Self-Care" },
  { name: "Self-Care Kits", category: "Wellness & Self-Care" },

  { name: "Unique Kitchen Gadgets", category: "Food & Kitchen" },
  { name: "Viral Snacks & Treats", category: "Food & Kitchen" },
  { name: "DIY Cooking Kits", category: "Food & Kitchen" },
  { name: "Bar & Mixology", category: "Food & Kitchen" },
  { name: "Coffee & Tea Essentials", category: "Food & Kitchen" },

  { name: "Anime & Manga", category: "Pop Culture & Geek" },
  { name: "Retro & Nostalgia", category: "Pop Culture & Geek" },
  { name: "Sci-Fi & Fantasy", category: "Pop Culture & Geek" },
  { name: "Horror & Spooky", category: "Pop Culture & Geek" },
  { name: "Movie & TV Merch", category: "Pop Culture & Geek" },
];

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Category.deleteMany({});
    await Subcategory.deleteMany({});

    const insertedCategories = await Category.insertMany(categoriesData);

    const subcategories = subcategoriesData
      .map((sub) => {
        const category = insertedCategories.find(
          (cat) => cat.name === sub.category
        );
        if (!category) {
          console.error(`Category not found for subcategory: ${sub.name}`);
          return null;
        }
        return {
          name: sub.name,
          category: category._id,
        };
      })
      .filter((sub) => sub !== null);

    await Subcategory.insertMany(subcategories);

    const allSubcategories = await Subcategory.find();

    const categoryMap = {};

    insertedCategories.forEach((category) => {
      categoryMap[category.name] = [];
    });

    allSubcategories.forEach((sub) => {
      const matchedCategory = insertedCategories.find(
        (cat) => String(cat._id) === String(sub.category)
      );
      if (matchedCategory) {
        categoryMap[matchedCategory.name].push(sub._id);
      }
    });

    // Update each category with its subcategory ObjectIds
    await Promise.all(
      insertedCategories.map((category) => {
        return Category.findByIdAndUpdate(category._id, {
          subcategories: categoryMap[category.name],
        });
      })
    );

    console.log("Categories and Subcategories inserted!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting categories:", err);
    mongoose.connection.close();
  }
};

seedCategories();
