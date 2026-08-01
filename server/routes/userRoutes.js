// =========================================================
// Import Express
// =========================================================

// Import the Express framework.
const express = require("express");

// =========================================================
// Create Router
// =========================================================

// Create a new Router instance.
const router = express.Router();

// =========================================================
// Import User Controller
// =========================================================

// Import the registerUser controller.
const {
    registerUser,
    loginUser
} = require("../controllers/userController");
// =========================================================
// User Routes
// =========================================================

// Register a new user.
router.post("/register", registerUser);
router.post("/login", loginUser);
// =========================================================
// Export Router
// =========================================================

module.exports = router;