const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehicle_name: String,
vehicle_type: String,
vehicle_Size: Number
})
module.exports = mongoose.model("vehicle",
vehicleSchema)