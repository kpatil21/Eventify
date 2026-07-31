// =========================================================
// Import Express
// =========================================================

// Import the Express framework.
const express = require("express");


// =========================================================
// Create Router Object
// =========================================================

// express.Router() creates a mini Express application.
//
// It is used to group related routes together.
//
// Later we'll create:
// - authRouter
// - eventRouter
// - bookingRouter
const router = express.Router();


// =========================================================
// Home Route
// =========================================================

// GET /
router.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Welcome to Eventify API Me"
    });

});


// =========================================================
// Export Router
// =========================================================

// Export this router so app.js can use it.
module.exports = router;