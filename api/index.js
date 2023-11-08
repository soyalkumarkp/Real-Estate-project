import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(port, () => {
  console.log(` app listening on port ${port}!!`);
});
