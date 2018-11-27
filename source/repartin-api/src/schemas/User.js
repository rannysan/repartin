const mongoose = require('mongoose')
// Create user schema 
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    uid: String,
    houseID: String,
    accepted: Boolean,
    removed: Boolean
});

module.exports = mongoose.model('users', userSchema);;