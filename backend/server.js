const dotenv = require('dotenv');
const express = require("express");
const categoriesRoute = require('./Routes/CategoriesRoute.js');
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const app = express();
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
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