// =========================================================
// Import User Model
// =========================================================

// Import the User model.
//
// The User model provides methods like:
// - create()
// - find()
// - findOne()
// - save()
// - updateOne()
// - deleteOne()
const User = require("../models/User");

// =========================================================
// Register User
// =========================================================

// This controller will register a new user.
//
// Currently it only sends a success message.
// Later we'll:
// - Read request data
// - Validate input
// - Save user to MongoDB
// - Hash the password
// - Generate JWT Token

const registerUser = async (req, res) => {

    res.status(200).json({
        success: true,
        message: "Register User API Working Successfully"
    });

};

// =========================================================
// Export Controller
// =========================================================

module.exports = {
    registerUser
};