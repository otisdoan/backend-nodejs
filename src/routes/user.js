const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/verifyToken");
const { register, login } = require('../controller/authController');
router.get("/profile", verifyToken, (req, res) => {
  res.json({ msg: "Welcome", user: req.user });
});
router.delete("/delete-user/:id", verifyToken, isAdmin, (req, res) => {
  res.json("User deleted (fake action)");
});
router.post('/register', register);
router.post('/login', login);

module.exports = router;
