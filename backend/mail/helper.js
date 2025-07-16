import nodemailer from 'nodemailer';

export class Helpers {
    async sendMail(template) {
        const transporter = nodemailer.createTransport({
            port: process.env.EMAIL_PORT || 465,
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            auth: {
                user: process.env.TO_EMAIL || 'deepakmeenaa78@gmail.com',
                pass: process.env.APP_PASSWORD || 'jznk jqdq hmqf ykdh',
            },
            secure: true,
        });

        const mailData = {
            from: process.env.TO_EMAIL || "deepakmeenaa78@gmail.com",
            to: process.env.FROM_EMAIL || "dm2000353@gmail.com",
            subject: "kuch bhi chalega",
            html: template
        };
 
        transporter.sendMail(mailData, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });
        return
    }
}
