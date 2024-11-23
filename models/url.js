const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
      match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, // Basic URL validation
    },
    visitHistory: {
      type: [{ timestamp: { type: Number } }],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
