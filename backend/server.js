const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const productsRoute = require('./Routes/ProductRoutes.js');
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 4001;
const uri = process.env.MONGO_URI;

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

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
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  });