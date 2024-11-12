// authMiddleware.js
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

module.exports.authenticateUser = async function (req, res, next) {
  if (!req.cookies.token || req.cookies.token === "") {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    
    // Fetch user based on the decoded token's email
    const user = await userModel.findOne({ email: decoded.email }).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Attach user to the request object
    next(); // Proceed to the next middleware/handler
  } catch (err) {
    res.status(401).json({ message: "Invalid token or token expired" });
  }
};
