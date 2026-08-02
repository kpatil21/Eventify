// =========================================================
// Role Authorization Middleware
// =========================================================

// This middleware checks whether the authenticated
// user has permission to access the route.

const authorize = (...roles) => {

    return (req, res, next) => {

        // Check if user's role is allowed
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Access denied. You are not authorized."
            });
        }

        // User has permission
        next();
    };

};

// =========================================================
// Export Middleware
// =========================================================

module.exports = {
    authorize
};