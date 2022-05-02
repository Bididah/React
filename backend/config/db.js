import mongoose from "mongoose";
import { async } from "regenerator-runtime";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectDB;
