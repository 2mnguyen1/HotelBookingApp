import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./router/auth.js";
import hotelsRoute from "./router/hotels.js";
// import roomsRoute from "./router/rooms.js";
// import usersRoute from "./router/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

// middlewares
app.use(cookieParser())
app.use(express.json()); // to send json request

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);
// app.use("/api/users", usersRoute);

// error handling middlewares
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!!";
  return res.status(errorStatus).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// NOTE
// a middlewares can reach any requests from users

// -----------------------------
app.listen(8800, () => {
  connect();
  console.log("connected to 8800 port");
});
