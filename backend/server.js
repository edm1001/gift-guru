const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const categoriesRoute = require("./Routes/CategoriesRoute.js");
const productsRoute = require('./Routes/ProductRoutes.js');
const cors = require("cors");
dotenv.config();

// Middleware
const app = express();
const uri = process.env.MONGO_URI;

// Routes
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to MongoDB and start server
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  });