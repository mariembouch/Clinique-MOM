const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./DataModel");
const DataModel1 = require("./DataModel1");

const connectDB = require("./Database");
connectDB();

const app = express();
app.use(express.json({ extended: false }));

//we need cors middleware here because frontend and backend run on different ports.
const cors = require("cors");
app.use(cors());




app.post("/writeDataModel1", async (req, res) => {
  try {
    const { Address, Key } = req.body;
    const newData = new DataModel1({ Address, Key, valid: 0 });
    await newData.save();
    res.json({ message: "Data saved successfully to DataModel1" });
  } catch (error) {
    console.error("Error while saving data to DataModel1:", error);
    res.status(500).json({ error: "Server error while saving data to DataModel1" });
  }
});

app.put("/makeValidDataModel1/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const updatedData = await DataModel1.findOneAndUpdate({ Address: address }, { valid: 1 });
    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data updated successfully in DataModel1", updatedData });
  } catch (error) {
    console.error("Error while updating data in DataModel1:", error);
    res.status(500).json({ error: "Server error while updating data in DataModel1" });
  }
});

app.get("/invalidAddresses", async (req, res) => {
  try {
    const invalidAddresses = await DataModel1.find({ valid: 0 });
    res.json(invalidAddresses);
  } catch (error) {
    console.error("Error while fetching invalid addresses:", error);
    res.status(500).json({ error: "Server error while fetching invalid addresses" });
  }
});


// Route to update all patients' valid field to 1 in MongoDB
app.put('/validate/all', async (req, res) => {
  try {
    // Update all patients' valid field to 1
    await DataModel.updateMany({}, { valid: 1 });
    res.status(200).json({ message: 'All patients validated successfully!' });
  } catch (error) {
    console.error('Error while validating all patients:', error);
    res.status(500).json({ error: 'Server error while validating all patients' });
  }
});


// Endpoint to fetch all data from the database
app.get("/alldata", async (req, res) => {
  try {
    const allData = await DataModel.find();
    res.json(allData);
  } catch (error) {
    console.error("Server error while fetching all data", error);
    res.status(500).send("Server error while fetching all data");
  }
});

app.get("/readfromserver", (req, res) => {
  res.json({ message: "Hey woman from server" });
});



app.post("/writetodatabase", async (req, res) => {
  try {
    const { prenom, nom, Email, CIN, Gender ,valid} = req.body;
    const newData = new DataModel({ prenom, nom, Email, CIN, Gender, valid});
    await newData.save();
    res.json({ message: "Data saved successfully" });
  } catch (error) {
    console.log("Error while saving data:", error.message);
    res.status(500).send("Server error while saving data");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});
