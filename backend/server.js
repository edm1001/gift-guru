require("dotenv").config();
const express = require("express");
const categoriesRoute = require('./Routes/CategoriesRoute.js');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined');
    }
    console.log('Attempting to connect to MongoDB with URI:', uri);
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error while connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

app.use(cors);
app.use(express.json());
app.use('/api/categories', categoriesRoute)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectDB();
});