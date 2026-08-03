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
const jwt = require("jsonwebtoken");
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
        const { name, email, password } = req.body;
          
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
            password: hashedPassword
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

    // Read email and password
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        });
    }

    // ✅ ADD JWT TOKEN HERE
    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );

    // User data (without password)
    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        profileImage: user.profileImage,
        isActive: user.isActive
    };

    // Response
    res.status(200).json({
        success: true,
        message: "Login successful",
        token,          // <-- Add this line
        user: userData
    });

};
// =========================================================
// Export Controller
// =========================================================

module.exports = {
    registerUser,
    loginUser
};