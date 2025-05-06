import express from "express";
import User from "../models/user_model.js"; // Import the User model

const router = express.Router();

// Fetch a user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id }); // Find user by `id`
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Fetch all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export default router;