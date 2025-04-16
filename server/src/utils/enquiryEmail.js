import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {
  generateAdminEnquiryTemplate,
  generateUserEnquiryTemplate,
} from "../templates/enquiry.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export const sendEnquiryMail = async (fname, lname, email, message) => {
  try {
    const adminHTML = generateAdminEnquiryTemplate({
      fname,
      lname,
      email,
      message,
    });
    const userHTML = generateUserEnquiryTemplate(fname);

    const adminMailOptions = {
      from: email,
      to: process.env.NODEMAILER_USER,
      subject: "Enquiry",
      html: adminHTML,
    };

    const userMailOptions = {
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Welcome",
      html: userHTML,
    };

    // # Promise.all() method
    const [adminMailResponse, userMailResponse] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log({ adminMailResponse, userMailResponse });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
