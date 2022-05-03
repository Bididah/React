import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./Data/users.js";
import products from "./Data/products.js";
import User from "./Models/UserModel.js";
import Product from "./Models/ProductModel.js";
import Order from "./Models/OrderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const AdminUser = createdUsers[0]._id;
    const simpleProducts = products.map((p) => {
      return { ...p, user: AdminUser };
    });

    await Product.insertMany(simpleProducts);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
