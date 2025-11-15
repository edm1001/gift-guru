import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import productsRoute from "./Routes/productRoutes.js";
import categoriesRoute from "./Routes/categoryRoutes.js";
import postsRoute from "./Routes/postRoute.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 4001;
const uri = process.env.MONGO_URI;

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Connect to MongoDB and start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
