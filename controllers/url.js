const shortid = require("shortid");
const URL = require("../models/url");

// Handle generating a new short URL
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const shortID = shortid.generate();
    const newUrl = await URL.create({
      shortId: shortID,
      redirectUrl: body.url,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleGenerateNewShortURL,
};
