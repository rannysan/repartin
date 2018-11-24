const mongoose = require('mongoose')

const paletteSchema = mongoose.Schema({
    primary: String,
    onPrimary: String,
    secondary: String,
    onSecondary: String
});

module.exports = mongoose.model('palettes', paletteSchema);