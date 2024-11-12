const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { generateOTP } = require("../utils/generateOTP");
const { sendOTPEmail } = require("../utils/sendEmail");

module.exports.registerUser = async (req, res) => {
  try {
    let { email } = req.body;
    let otp = generateOTP();

    // hash the OTP
    const salt = await bcrypt.genSalt(10);
    const hashedOTP = await bcrypt.hash(otp, salt);

    // create user
    let user = userModel.create({
      email,
      otp: hashedOTP,
    });

    // send otp to email
    const emailResult = await sendOTPEmail(email, otp);

    if (emailResult.success) {
      return res.status(201).json({
        message: "User registered. OTP sent to email.",
        userId: user._id,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Registration failed",
      error: err.message,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  let { email, otp } = req.body;
  let user = await userModel.findOne({ email: email });
  
  bcrypt.compare(otp, user.otp, function (err, result) {
      if (result) {
          res.send("you can login");
      } else {
          return res.send("incorrect otp");
      }
  })

};