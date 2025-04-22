const mongoose = require("mongoose")
const expeditionsSchema = mongoose.Schema({
    expeditions_type: {
        type: String,
        required: [true, "Expeditions type is required"],
        minlength: [3, "type must be At least 3"],
    },

    size: {
        type: String,
        required: [true, "Expeditions size is required"],
        minlength: [2, "type must be At least 2"],

    },
    cost: {
        type: Number,
        required: [true, "Expeditions cost is required"],
        min: [3, "type must be At least 3"],
    },

})
module.exports = mongoose.model("expeditions",
    expeditionsSchema)