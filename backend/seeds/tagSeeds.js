const mongoose = require("mongoose");
const Tag = require("../Model/Tags.js");
require("dotenv").config();

const tagData = [
  { name: "diy" },
  { name: "creative" },
  { name: "budget-friendly" },
  { name: "craft" },
  { name: "eco-friendly" },
  { name: "travel" },
  { name: "functional" },
  { name: "fashion" },
  { name: "accessories" },
  { name: "gift" },
  { name: "customizable" },
  { name: "aesthetic" },
  { name: "stem" },
  { name: "learning" },
  { name: "fun" },
  { name: "tech" },
  { name: "self-care" },
  { name: "wellness" },
  { name: "relaxation" },
  { name: "premium" },
];

const seedTags = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Tag.deleteMany({});
    await Tag.insertMany(tagData);
    console.log("Tags inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting tags:", err);
    mongoose.connection.close();
  }
};

seedTags();
