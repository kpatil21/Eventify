// =========================================================
// Import Mongoose
// =========================================================

// Import the Mongoose library.
//
// Mongoose provides everything needed to:
//
// - Define Schemas
// - Create Models
// - Validate Data
// - Perform CRUD Operations
//
// Without importing Mongoose,
// we cannot create a Schema or Model.
const mongoose = require("mongoose");

// =========================================================
// Create User Schema
// =========================================================
const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"]
},
email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address"
    ]
},
password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"]
},
phone: {
    type: String,
    default: "",
    trim: true
},
role: {
    type: String,
    enum: ["parent", "admin"],
    default: "parent"
},
profileImage: {
    type: String,
    default: ""
},
isActive: {
    type: Boolean,
    default: true
},
},
{
    timestamps: true
}
);

// =========================================================
// Create User Model
// =========================================================

// Create a Mongoose Model using the User Schema.
//
// Syntax:
// mongoose.model(ModelName, Schema)
//
// ModelName:
// The singular name of the collection.
//
// Mongoose automatically converts:
// User → users
//
// This model provides methods like:
// - create()
// - find()
// - findOne()
// - updateOne()
// - deleteOne()
// - save()
const User = mongoose.model("User", userSchema);
module.exports = User;