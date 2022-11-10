const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
Vehicle_name: String,
Vehicle_type: String,
Vehicle_size: Number
})

module.exports = mongoose.model("vehicle",
vehicleSchema)