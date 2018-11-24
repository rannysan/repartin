const mongoose = require('mongoose')
// Create user schema 
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    token: Date,
    houseID: Number,
    removed: Boolean
});

module.exports = mongoose.model('users', userSchema);;