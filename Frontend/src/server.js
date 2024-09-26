const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Set up your email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourgmail@gmail.com', // Replace with your email
        pass: 'yourpassword', // Replace with your email password or App-specific password
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'metitamiru22@gmail.com', // Replace with the recipient email
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ success: true });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
