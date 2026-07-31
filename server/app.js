
// Import Expres
const express = require("express");
// Import CORS Middleware
const cors = require("cors");

// =========================================================
// Import Application Routes
// =========================================================

// Import all application routes.
//
// Currently it contains only the Home Route.
// Later it will include authentication,
// events, bookings, and more.
const router = require("./routes");
const userRoutes = require("./routes/userRoutes");

// ===============================================
// Create an Express Application
// ===============================================

// express() creates an Express Application Object.
// This 'app' represents our entire backend application.

const app = express();

// =========================================================
// Register Middleware
// =========================================================
// Parse incoming JSON requests
app.use(express.json());
// Enable Cross-Origin Resource Sharing
 app.use(cors());
 // Register Routes
app.use("/", router);
app.use("/api/users", userRoutes);


// ===============================================
// Export the Express Application
// ===============================================

// Export 'app' so that server.js can import it.
//
// server.js will use this app to start the server.
//
// Without exporting,
// server.js cannot access our Express application.
module.exports = app;