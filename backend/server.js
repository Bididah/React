import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import products from "./Data/products.js";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

connectDB();

const app = express();

app.use("/api/products", ProductRoute);

app.get("/api/products/:id", ProductRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
