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

// Import middleware.
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
// =========================================================
// User Routes
// =========================================================

// Register a new user.
router.post("/register", registerUser);
router.post("/login", loginUser);

// =====================
// Protected Test Route
// =====================

// Only Admin
router.get(
    "/admin-dashboard",
    protect,
    authorize("admin"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome Admin"
        });
    }
);

// Admin or Organizer
router.get(
    "/manage-events",
    protect,
    authorize("admin", "organizer"),
    (req, res) => {
        res.json({
            success: true,
            message: "Event Management"
        });
    }
);

// Parent, Organizer, or Admin
router.get(
    "/profile",
    protect,
    authorize("parent", "organizer", "admin"),
    (req, res) => {
        res.json({
            success: true,
            message: "Profile Page"
        });
    }
);
// =========================================================
// Export Router
// =========================================================

module.exports = router;