require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

const sendOTPEmail = async (email, otp) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "one-time-pass for Echos Vault",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
                    <h2>OTP Verification</h2>
                    <p>Your One-Time Password (OTP) for registration is:</p>
                    <h3 style="background-color: #f0f0f0; padding: 10px; text-align: center; letter-spacing: 2px;">
                        ${otp}
                    </h3>
                    <small>If you didn't request this, please ignore this email.</small>
                </div>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        return {
            success: true,
            message: 'OTP sent successfully',
            result
        };

    } catch (err) {
        console.error('Error sending OTP email:', error);
        return {
            success: false,
            message: 'Failed to send OTP',
            error: err.message
        };
    }
};

module.exports.sendOTPEmail = sendOTPEmail;