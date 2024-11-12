const { registerUser, loginUser } = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
