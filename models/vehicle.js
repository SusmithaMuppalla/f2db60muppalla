const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehicle_name:{
type: String,
required:true
},
vehicle_size: {
    type:Number,
    min:2,max:156
},
vehicle_type:{
    type:String,
    required:true
}
})
module.exports = mongoose.model("vehicle",
vehicleSchema)