const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/post', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, address, message, selectedService } = req.body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    let emailMessage = `
      <p>Name: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phoneNumber}</p>
    `;

    if (address) {
      emailMessage += `<p>Address: ${address}</p>`;
    }

    if (message) {
      emailMessage += `<p>Message: ${message}</p>`;
    }

    if (selectedService) {
      emailMessage += `<p>Selected Service: ${selectedService}</p>`;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: 'info.jeetandsonienterprises@gmail.com',
      subject: 'New Contact Form Submission',
      html: emailMessage,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: `Failed to send email: ${error.message}` });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
