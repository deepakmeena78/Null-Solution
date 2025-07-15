import express from "express";
import CustomerRoute from "./routes/Frontend/Customer.routes.js";
import AdminRoute from "./routes/Backend/admin.routes.js";
import HelpRoute from "./routes/Frontend/Help.routes.js";
import HelpProvider from "./routes/Frontend/HelpProvider.routes.js";
import CategoryRoute from "./routes/Backend/Category.routes.js";
import Review from "./routes/Frontend/Review.routes.js";
import connectDB from "./db/db.config.js";
import DashboardRoute from "./routes/Frontend/DashBoard.routes.js";
import ContactRoute from "./routes/Frontend/Contact.routes.js";
import http from "http";

const app = express();
import socketHandler from "./Helpers/Chatbot.js";
const server = http.createServer(app);
socketHandler(server);
connectDB();

import cors from "cors";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/admin", AdminRoute);

const Port = process.env.PORT || 3100;
app.listen(Port, () => {
  console.log("Server Started" + Port);
});
