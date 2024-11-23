const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error; // Ensure the app doesn't continue on connection failure
  }
}

module.exports = {
  connectToMongoDB,
};
