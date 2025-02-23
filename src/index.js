require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Default Route
app.get("/", (req, res) => {
    res.send("Indie Music Platform API is running...");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/authRoutes");

// Authentication Routes
app.use("/api/auth", authRoutes);

const songRoutes = require("./routes/songRoutes");

app.use("/api/songs", songRoutes);



