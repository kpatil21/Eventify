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
const bcrypt = require("bcrypt");
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

    try {

        // Read data from request body
        const { name, email, password, phone } = req.body;
          
 // Check if email already exists
const existingUser = await User.findOne({ email });

if (existingUser) {
    return res.status(400).json({
        success: false,
        message: "Email already registered"
    });
}
        // Hash the password before saving
       const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        });

        // Send response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const loginUser = async (req, res) => {

    // Read email and password from request body
    const { email, password } = req.body;

    res.status(200).json({
        success: true,
        data: {
            email,
            password
        }
    });

};
// =========================================================
// Export Controller
// =========================================================

module.exports = {
    registerUser
};