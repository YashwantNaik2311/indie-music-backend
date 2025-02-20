const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinaryConfig");
const Song = require("../models/Song"); // Import Song model

const router = express.Router();

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "songs",
    resource_type: "auto", // Supports audio files
  },
});

const upload = multer({ storage });

// ✅ Upload Song & Store in MongoDB
router.post("/upload", upload.single("song"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Create song entry in MongoDB
    const newSong = new Song({
      title: req.body.title || "Unknown Title",
      artist: req.body.artist || "Unknown Artist",
      fileUrl: req.file.path,
      public_id: req.file.filename,
    });

    await newSong.save();

    res.status(200).json({
      message: "Song uploaded successfully",
      song: {
        _id: newSong._id, // Song ID for fetching later
        title: newSong.title,
        artist: newSong.artist,
        fileUrl: newSong.fileUrl,
      },
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Stream Song by ID
router.get("/stream/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.redirect(song.fileUrl); // Redirect to Cloudinary URL
  } catch (error) {
    console.error("Streaming Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
