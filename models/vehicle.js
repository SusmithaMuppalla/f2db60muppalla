const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehicle_name: String,
vehicle_Size: Number,
vehicle_type: String

})
module.exports = mongoose.model("vehicle",
vehicleSchema)