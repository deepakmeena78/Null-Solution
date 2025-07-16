import { validationResult } from "express-validator";
import { Template } from "../Utils/template.js";
import { Helpers } from "../mail/helper.js";


export const ContactUs = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name,subject, email, mobile, message } = req.body;

        let data = {
            name: name,
            email: email,
            year: new Date().getFullYear(),
            projectName: process.env.PROJECT_NAME || "Null Solutions",
            mobile: mobile,
            message: message,
            subject: subject,
        };

        const template= new Template();
        const templateData = template.getContactUsTemplate(data);
        const helper = await new Helpers().sendMail(templateData);


        return res.status(200).json({ message: "Send Message Successful" ,helper});
    } catch (error) {
        console.log("Contact Us Error:", error);
        return res.status(500).json({ message: "ERROR Contact Us", error });
    }  //------------------------ Contact Us ------------------------------
}