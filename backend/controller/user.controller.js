import { validationResult } from "express-validator";
import { Template } from "../Utils/template.js";
import { Helpers } from "../mail/helper.js";


export const ContactUs = async(req,res)=>{
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const {name,email,mobile,message} = req.body;

        let data = {
            name: name,
            email: email,
            year: new Date().getFullYear(),
            projectName: process.env.PROJECT_NAME || "Null Solutions",
            mobile: mobile,
            message: message,
            subject: "Null Solution Contact Us",
        };

        const templateData = new Template();
        templateData.getContactUsTemplate(data);
        const helper = new Helpers();
        helper.sendMail(templateData)

        return res.status(200).json({ msg: "Sign Up Successful", user: result });
    } catch (error) {
        console.error("Sign-Up Error:", error);
        return res.status(500).json({ msg: "ERROR SIGN-UP", error: error.message });
    }  //------------------------ Contact Us ------------------------------
}