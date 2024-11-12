require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URI)
.then(() => {
    console.log("established connection with mongoDB");
})
.catch((err) => {
    console.log(err);
})

module.exports = mongoose.connection;
