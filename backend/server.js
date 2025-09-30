const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000; // You can change port if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File storage config for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save files in uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// --- Routes ---

// Default Route
app.get("/", (req, res) => {
  res.send("✅ GreenBin Backend Server is Running...");
});

// Handle Waste Report (upload image/video + location)
app.post("/report", upload.single("media"), (req, res) => {
  const location = req.body.location;
  const file = req.file;

  res.json({
    success: true,
    message: "Report submitted successfully!",
    data: {
      location: location,
      file: file ? file.filename : null
    }
  });
});

// User Registration
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  res.json({
    success: true,
    message: "User registered successfully!",
    data: { username, email }
  });
});

// Contact Form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  res.json({
    success: true,
    message: "Message received!",
    data: { name, email, message }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
