const mongoose = require("mongoose");

const storySchema = mongoose.Schema(
    {
        title: String,
        content: String,
    }
);

module.exports = mongoose.model("story", storySchema)