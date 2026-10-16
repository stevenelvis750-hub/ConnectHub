
require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const connectDB = require("./server/config/database");
const authRoutes = require("./server/routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Security and request handling
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use(morgan("dev"));

// Frontend configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "client", "views"));

app.use(express.static(path.join(__dirname, "client", "public")));

// Homepage
app.get("/", (req, res) => {
    res.render("login", { title: "ConnectHub" });
});

// Backend health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "ConnectHub server is running!"
    });
});
// Registration page
app.get("/register", (req, res) => {
    res.render("register", {
        title: "Create Account | ConnectHub"
    });
});

// Login page
app.get("/login", (req, res) => {
    res.render("login", {
        title: "Login | ConnectHub"
    });
});

// Unknown pages
app.use((req, res) => {
    res.status(404).send("Page not found.");
});

// Connect to MongoDB before accepting requests
async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(
                `🚀 ConnectHub running at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error("❌ ConnectHub startup failed:", error.message);
        process.exitCode = 1;
    }
}

startServer();
