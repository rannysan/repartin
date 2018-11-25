const mongoose = require('mongoose')

// Create house schema 
let houseSchema = mongoose.Schema({
    name: String,
    address: String,
    creation: Date,
    color: Object,
    adminID: String,
    removed: Boolean
});

module.exports = mongoose.model('houses', houseSchema);;