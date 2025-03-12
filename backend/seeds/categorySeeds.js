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
      { name: "Elderly" },
    ];

    // Insert categories and store references
    const createdCategories = await Category.insertMany(categoriesData);
    // Map category names to their IDs for reference
    const categoryMap = {};
    createdCategories.forEach((category) => {
      categoryMap[category.name] = category._id;
    });

    // TODO: Update categories
    const subcategoriesData = [
      { name: "Arts & Crafts", category: categoryMap["Hobby"] },
      { name: "Cooking & Baking", category: categoryMap["Hobby"] },
      { name: "DIY & Furniture", category: categoryMap["Hobby"] },
      { name: "Games & Collectibles", category: categoryMap["Hobby"] },
      { name: "Health & Fitness", category: categoryMap["Hobby"] },
      { name: "Music & Instruments", category: categoryMap["Hobby"] },
      { name: "Outdoor Activities", category: categoryMap["Hobby"] },
      { name: "Sports & Recreation", category: categoryMap["Hobby"] },
      { name: "Tech & Gadgets", category: categoryMap["Hobby"] },

      { name: "Anniversaries", category: categoryMap["Events"] },
      { name: "Baby Showers", category: categoryMap["Events"] },
      { name: "Birthdays", category: categoryMap["Events"] },
      { name: "Graduations", category: categoryMap["Events"] },
      { name: "Housewarming", category: categoryMap["Events"] },
      { name: "Retirement", category: categoryMap["Events"] },
      { name: "Holidays", category: categoryMap["Events"] },
      { name: "Valentines Day", category: categoryMap["Events"] },
      { name: "Weddings", category: categoryMap["Events"] },

      { name: "Books & Literature", category: categoryMap["Adults"] },
      { name: "Fashion & Accessories", category: categoryMap["Adults"] },
      { name: "Home Decor", category: categoryMap["Adults"] },
      { name: "Intimate Products", category: categoryMap["Adults"] },
      { name: "Luxury Items", category: categoryMap["Adults"] },
      { name: "Personal Care", category: categoryMap["Adults"] },
      { name: "Tech & Gadgets", category: categoryMap["Adults"] },
      { name: "Unique Experiences", category: categoryMap["Adults"] },
      { name: "Wine & Spirits", category: categoryMap["Adults"] },

      { name: "Arts & Crafts", category: categoryMap["Kids"] },
      { name: "Educational Toys", category: categoryMap["Kids"] },
      { name: "Outdoor Toys", category: categoryMap["Kids"] },
      { name: "Tech & Gadgets", category: categoryMap["Kids"] },
      { name: "Toys for Girls", category: categoryMap["Kids"] },
      { name: "Toys for Boys", category: categoryMap["Kids"] },

      { name: "Activities", category: categoryMap["Elderly"] },
      { name: "Assistive Devices", category: categoryMap["Elderly"] },
      { name: "Comfort & Relaxation", category: categoryMap["Elderly"] },
      { name: "Health & Wellness", category: categoryMap["Elderly"] },
      { name: "Personal Care", category: categoryMap["Elderly"] },
      { name: "Supplemental Aid", category: categoryMap["Elderly"] },
    ];

    // Insert subcategories
    const createdSubcategories = await Subcategory.insertMany(
      subcategoriesData
    );

    // Update categories to include references to their subcategories
    for (const subcategory of createdSubcategories) {
      await Category.findByIdAndUpdate(subcategory.category, {
        $push: { subcategories: subcategory._id },
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
