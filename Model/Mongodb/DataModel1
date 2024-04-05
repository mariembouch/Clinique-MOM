const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    Address: {
        type: String,
        required: true
    },
    Key: {
        type: String,
        required: true
    },
    valid: {
        type: Number,
        default: 0 // Provide a default value
    }
});

module.exports = mongoose.model("DataModel1", DataSchema, "Address");
