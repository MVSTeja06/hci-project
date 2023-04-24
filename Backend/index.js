const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const nm = require('nodemailer');
let savedOTPS = {

};
const transporter = nm.createTransport(
    {
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: 'hciproject732@gmail.com',
            pass: 'human@732'
        }
    }
);
app.post('/sendotp', (req, res) => {
    let email = req.body.email;
    let digits = '0123456789';
    let limit = 4;
    let otp = ''
    for (i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];

    }
    const options = {
        from: 'hciproject732@gmail.com',
        to: `${email}`,
        subject: "Testing node emails",
        html: `<p>Enter the otp: ${otp} to verify your email address</p>`

    };
    console.log(options, req.params, req.query, req.body);
    transporter.sendMail(
        options, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send("couldn't send")
            }
            else {
                savedOTPS[email] = otp;
                setTimeout(
                    () => {
                        delete savedOTPS.email
                    }, 60000
                )
                res.send("sent otp")
            }

        }
    )
})

app.post('/verify', (req, res) => {
    let otprecived = req.body.otp;
    let email = req.body.email;
    if (savedOTPS[email] == otprecived) {
        res.send("Verfied");
    }
    else {
        res.status(500).send("Invalid OTP")
    }
})

app.listen(4000, () => {
    console.log("started")
})