const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    userId: Number,
    value: Float64Array,
    date: Date,
    removed: Boolean
});

module.exports = mongoose.model('payment', PaymentSchema);