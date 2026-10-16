
const bcrypt = require("bcrypt");
const User = require("../models/User");

async function register(req, res) {
    try {
        const { username, displayName, email, password } = req.body;

        if (!username || !displayName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please complete all required fields."
            });
        }

        if (!/^[a-zA-Z0-9_]{3,30}$/.test(username)) {
            return res.status(400).json({
                success: false,
                message: "Username must be 3–30 characters and contain only letters, numbers, and underscores."
            });
        }

        if (displayName.trim().length > 60) {
            return res.status(400).json({
                success: false,
                message: "Display name must be 60 characters or fewer."
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const normalizedUsername = username.trim().toLowerCase();

        if (
            normalizedEmail.length > 254 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
        ) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address."
            });
        }

        if (
            typeof password !== "string" ||
            password.length < 12 ||
            password.length > 72
        ) {
            return res.status(400).json({
                success: false,
                message: "Password must be between 12 and 72 characters."
            });
        }

        const existingUser = await User.findOne({
            $or: [
                { email: normalizedEmail },
                { username: normalizedUsername }
            ]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "That email or username is already registered."
            });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const user = await User.create({
            username: normalizedUsername,
            displayName: displayName.trim(),
            email: normalizedEmail,
            passwordHash
        });

        return res.status(201).json({
            success: true,
            message: "ConnectHub account created successfully!",
            user: {
                id: user._id,
                username: user.username,
                displayName: user.displayName,
                email: user.email
            }
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "That email or username is already registered."
            });
        }

        console.error("Registration error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to create your account right now."
        });
    }
}

module.exports = { register };
