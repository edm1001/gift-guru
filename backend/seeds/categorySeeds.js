const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const Category = require("./models/Category");
const Subcategory = require("./models/Subcategory");
const connectDB = require("./config/db");

connectDB(); // Connect to MongoDB

const seedDatabase = async () => {
  try {
    console.log("Seeding database...");

    const categoriesData = [
      { name: "Hobby" },
      { name: "Events" },
      { name: "Adults" },
      { name: "Kids" },
      { name: "Elderly" }
    ];

    // Insert categories and store references
    const createdCategories = await Category.insertMany(categoriesData);
    // Map category names to their IDs for reference
    const categoryMap = {};
    createdCategories.forEach(category => {
      categoryMap[category.name] = category._id;
    });

    // TODO: Update categories
    const subcategoriesData = [
      { name: "Fitness", category: categoryMap["Hobby"] },
      { name: "Arts & Crafts", category: categoryMap["Hobby"] },
      { name: "Outdoors", category: categoryMap["Hobby"] },
      { name: "Party Supplies", category: categoryMap["Events"] },
      { name: "Wedding Gifts", category: categoryMap["Events"] },
      { name: "Luxury", category: categoryMap["Adults"] },
      { name: "Personal Care", category: categoryMap["Adults"] },
      { name: "Toys", category: categoryMap["Kids"] },
      { name: "Educational", category: categoryMap["Kids"] },
      { name: "Comfort", category: categoryMap["Elderly"] },
      { name: "Health & Wellness", category: categoryMap["Elderly"] }
    ];

    // Insert subcategories
    const createdSubcategories = await Subcategory.insertMany(subcategoriesData);

    // Update categories to include references to their subcategories
    for (const subcategory of createdSubcategories) {
      await Category.findByIdAndUpdate(subcategory.category, {
        $push: { subcategories: subcategory._id }
      });
    }

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
