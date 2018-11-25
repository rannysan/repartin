const mongoose = require('mongoose')

// Create house schema 
let houseSchema = mongoose.Schema({
    name: String,
    address: String,
    creation: Date,
    color: Object,
    adminID: mongoose.Types.ObjectId,
    removed: Boolean
});

module.exports = mongoose.model('houses', houseSchema);;