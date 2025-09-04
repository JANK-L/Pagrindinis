import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import pratimaiRoutes from "./routes/pratimai.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

//connect to DB
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("-----");
      console.log("Connected to DB.");
      console.log(`Listening on port ${process.env.PORT}.`);
      console.log(`Hosting: https://localhost:${process.env.PORT}`);
      console.log("-----");
    });
  })
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("-----");
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});
app.use("/api/pratimai", pratimaiRoutes);
app.use("/api/user", userRoutes);
