const Location = require("./model");

// Render Controller: Render index.html with Location using EJS
const renderLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.render("../views/index", { locations }); // Render index.ejs with Locations data
  } catch (error) {
    console.error("Error rendering index.html:", error);
    res.status(500).send("Internal Server Error");
  }
};

// get all Locations
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add one Location
const addLocation= async (req, res) => {
  try {
    const { name, address, latitude,longitude } = req.body;
    const newLocation = new Location({ name, address, latitude, longitude });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

// Delete all Locations
const deleteAllLocations = async (req, res) => {
  try {
    const result = await Location.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} Locations successfully` });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

module.exports = {
  getLocations,
  renderLocations,
  addLocation,
  deleteAllLocations,
};

