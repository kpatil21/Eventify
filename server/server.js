
// =========================================================
// Load Environment Variables
// =========================================================

// Import and configure the dotenv package.
//
// dotenv reads the values stored inside the .env file
// and loads them into process.env.
//
// Example:
// .env
// PORT=5000
//
// Access in Node.js:
// process.env.PORT
require("dotenv").config();


// =========================================================
// Import the Express Application
// =========================================================

// Import the Express application from app.js.
//
// app.js is responsible for:
// - Creating the Express application
// - Registering middleware
// - Defining routes
//
// server.js is only responsible for starting the server.
const app = require("./app");

// Import Database Connection
const connectDB = require("./config/db");
// Connect to MongoDB
connectDB();
// =========================================================
// Define the Port Number
// =========================================================

// Read the PORT value from the .env file.
//
// If PORT is not available,
// use 5000 as the default port.
//
// || is the JavaScript OR operator.
const PORT = process.env.PORT || 5000;


// =========================================================
// Start the Express Server
// =========================================================

// app.listen() starts the Express server.
//
// Syntax:
// app.listen(PORT, Callback)
//
// PORT
// The port number on which the server listens for requests.
//
// Callback Function

// Executes once the server starts successfully.
app.listen(PORT, () => {

    // Print a success message in the terminal.
    console.log(`🚀 Eventify Server is running on port ${PORT}`);

});