const mongoose = require('mongoose')
// Create user schema 
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    uid: String,
    houseID: String,
    removed: Boolean
});

module.exports = mongoose.model('users', userSchema);;