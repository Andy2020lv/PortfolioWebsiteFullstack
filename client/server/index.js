const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const Server = require("http-proxy");
// bucjipebiwmlwshq

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Use nodemailer to send the email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: "your-email-address",
      pass: "your-password",
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "your-email-address",
    subject: "New message from contact form",
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Return an error if there was a problem sending the email
      res.status(500).json({ error });
    } else {
      // Return a success message if the email was sent successfully
      res.json({ message: "Email sent successfully" });
    }
  });
});

app.send("/", (req, res) => console.log("Email sent!"));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
