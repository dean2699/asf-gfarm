// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service (e.g., Gmail, SendGrid)
    auth: {
        user: 'deanferrazzini@gmail.com', // Your email address
        pass: 'Dean@082699' // Your email password or app password
    }
});

// Endpoint to send confirmation email
app.post('/send-confirmation-email', (req, res) => {
    const { email, name, contactNumber, message, appointmentDate, appointmentTime } = req.body; // Get data from the request body

    console.log('Received data:', { email, name, contactNumber, message, appointmentDate, appointmentTime }); // Log the data

    // Email options
    const mailOptions = {
        from: 'deanferrazzini@gmail.com', // Your email address (sender)
        to: email, // Recipient address (user's email)
        subject: 'Appointment Confirmation', // Subject line
        text: 'Thank you for your appointment request! We will get back to you shortly.', // Plain text body
        html: '<p>Thank you for your appointment request! We will get back to you shortly.</p>', // HTML body
        replyTo: email // Optional: set the reply-to address to the user's email
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send confirmation email.' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Confirmation email sent successfully.' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});