const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    value: { type: String, required: true },
    values: { type: String },
    date: { type: Date, default: Date.now },
})

const Data = mongoose.model('data', dataSchema)

module.exports = Data