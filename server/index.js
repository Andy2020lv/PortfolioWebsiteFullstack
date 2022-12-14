const nodemailer = require("nodemailer");
require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a new nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "andyhernandez5102@gmail.com",
      pass: process.env.MAIL_PASS,
    },
  });

  // Set up the email options
  const mailOptions = {
    from: email,
    to: "andyhernandez5102@gmail.com",
    subject: "Portfolio website",
    text: `From: ${name} (${email})\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.send("Email sent successfully");
    }
  });
});

app.listen(5000, () => console.log("Listening on port 5000"));
