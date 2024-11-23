const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url");

const router = express.Router();

// POST route to generate a new short URL
router.post("/", handleGenerateNewShortURL);

// GET route to fetch all URLs
router.get("/", async (req, res) => {
    res.json({ message: "Use the POST method to create a short URL" });
});

module.exports = router;
