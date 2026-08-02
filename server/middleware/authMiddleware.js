// =========================================================
// Import JWT
// =========================================================

// Import jsonwebtoken package
const jwt = require("jsonwebtoken");

// =========================================================
// Authentication Middleware
// =========================================================


// This middleware will verify the JWT token
const protect = async (req, res, next) => {

    // Read token from request header
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided."
        });
    }

    // Check if Authorization header starts with "Bearer"
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Invalid token format"
        });
    }

    // Extract JWT token
    const token = authHeader.split(" ")[1];
     console.log("Authorization Header:", authHeader);
console.log("Extracted Token:", token);
    try {

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user data to request
        req.user = decoded;

        // Continue to the next middleware/controller
        next();

    } catch (error) {

    console.log("JWT Error:", error);

    return res.status(401).json({
        success: false,
        message: error.message
    });

}

};

// =========================================================
// Export Middleware
// =========================================================

module.exports = {
    protect
};