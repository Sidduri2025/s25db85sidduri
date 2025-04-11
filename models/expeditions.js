const mongoose = require("mongoose")
const expeditionsSchema = mongoose.Schema({
    expeditions_type: String,
    size: String,
    cost: Number
})
module.exports = mongoose.model("expeditions",
    expeditionsSchema)