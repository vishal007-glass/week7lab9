const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getLocations,
  renderLocations,
  addLocation,
  deleteAllLocations,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Set views directory for EJS templates
app.set("views", "views");
// Set EJS as the view engine
app.set("view engine", "ejs");
// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
connectDB();

// Routes

// Route to render index.html with Locations using EJS
app.get("/", renderLocations);

// GET all Location
app.get("/api/location", getLocations);
// Add a new Location
app.post("/api/location", addLocation);
// DELETE all Location
app.delete("/api/location", deleteAllLocations);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});