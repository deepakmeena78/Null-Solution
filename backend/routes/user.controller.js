import express from "express";
import { body } from "express-validator";

const route = express.Router();

route.post("/contact-us",
    body("name", "Name is required.").notEmpty(),              
    body("email", "Invalid email address.").isEmail(),
    body("mobile", "Mobile Is Required").notEmpty(),
    body("message", "Message is Required").notEmpty(),
    ContactUs);

export default route;