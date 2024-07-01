const dotenv = require('dotenv');
const express = require("express");
const categoriesRoute = require('./Routes/CategoriesRoute.js');
// const productsRoute = require('./Routes/ProductsRoute.js');
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

const mongoURI = "mongodb+srv://edmerfranciz:edmerfranciz@ecommercecluster.nm0tcfy.mongodb.net/?retryWrites=true&w=majority&appName=eCommerceCluster"

console.log("Connecting to MongoDB with URI:", mongoURI);

mongoose.connect(mongoURI);

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use('/api/products', categoriesRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});