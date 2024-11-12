const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middlewares/authMiddleware");
const Story = require("../models/storyModel");

router.get("/", authenticateUser, async (req, res) => {
    try {
      const stories = await Story.find();
      res.json(stories);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch stories", error: err.message });
    }
  });
  

module.exports = router;