const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const categoriesRoute = require('./Routes/CategoriesRoute.js');
// const productsRoute = require('./Routes/ProductRoutes.js');
const cors = require("cors");
dotenv.config();
const app = express();
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(async () => {
    console.log('Connected to MongoDB');
    const db = mongoose.connection;
    const collections = await db.db.listCollections().toArray();
    console.log('Collections:', collections);

    // Find documents in Products collection
    const products = await db.db.collection('Products').find().toArray();
    console.log('Products:', products);

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    console.error('ErrorName:' , err.name );
    console.error('ErrorMessage:' , err.message );
  });

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use('/api/categories', categoriesRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});