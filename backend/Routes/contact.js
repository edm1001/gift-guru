import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("API/Contact hit, BODY:", req.body);
  try {
    console.log("sending email...")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[Gift Idea] ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });
    console.log("Email sent successfully");
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false });
  }
});

export default router;
