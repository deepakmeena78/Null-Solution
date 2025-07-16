import express from "express";
import AdminRoute from "./routes/user.controller.js";
import cors from "cors";
import 'dotenv/config'
// import connectDB from "./db/db.config.js";
// connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);

const Port = process.env.PORT || 3100;
app.listen(Port, () => {
  console.log("Server Started" + Port);
});
