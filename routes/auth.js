const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth/auth");


router.post("/login", userController.loginUser);
router.post("/register", authMiddleware, userController.registerUser);

module.exports = router;