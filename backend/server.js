import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js"; // Import Google Auth routes
import session from "express-session";
import passport from "passport";
import "./config/passport.js"; // Import passport configuration
import userRoutes from "./routes/userRoutes.js"; // Import user routes

dotenv.config();

const app = express();

// Middleware for sessions
app.use(
    session({
        secret: process.env.secret_key,
        resave: false,
        saveUninitialized: true,
    })
);


// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Use User routes
app.use("/users", userRoutes);

// Use Google Auth routes
app.use(googleAuthRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
