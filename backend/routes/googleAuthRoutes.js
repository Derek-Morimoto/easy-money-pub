import express from "express";
import passport from "passport";

const router = express.Router();

// Route to initiate Google authentication
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

// Callback route for Google to redirect to
router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/failure",
    }),
    (req, res) => {
        res.send("Google Authentication Successful");
    }
);

// Failure route
router.get("/auth/failure", (req, res) => {
    res.send("Failed to authenticate with Google");
});

export default router;