import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;
// const connectDB = require("../config/database");
// require("dotenv").config({ path: "../config/env" });

// connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pihxa.mongodb.net/?retryWrites=true&w=majority`;
// // const uri: string = "process.env.DB_STRING";

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });

// app.listen(process.env.PORT || PORT, () => {
//   console.log("Server is running, you better catch it!");
// });
