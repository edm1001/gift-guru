const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const categoriesRoute = require("./Routes/CategoriesRoute.js");
const productsRoute = require('./Routes/ProductRoutes.js');
const cors = require("cors");
dotenv.config();

const app = express();
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful connection
    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);

app.get('/', (req, res) => {
  res.send('Server is up and running');
});