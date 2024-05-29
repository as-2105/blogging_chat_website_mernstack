import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();
connectdb();
const PORT = process.env.PORT || 3000;
const app = express();
// Middlewares
app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());
// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);



app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));