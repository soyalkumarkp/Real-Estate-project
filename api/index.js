import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  mongoose.connect(process.env.MONGO);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(` app listening on port ${port}!!`);
});
