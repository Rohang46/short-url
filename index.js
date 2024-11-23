const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url"); // Import the URL model

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Set EJS as the view engine and configure views folder
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Render the Home Page with URLs
app.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
});

// URL routes
app.use("/url", urlRoute);

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
