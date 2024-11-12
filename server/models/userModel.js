const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: String,
        otp: String,
    }
);

module.exports = mongoose.model("user", userSchema);
