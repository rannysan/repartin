const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    userId: Number,
    value: mongoose.Schema.Types.Decimal128,
    date: Date,
    removed: Boolean
});

module.exports = mongoose.model('payment', PaymentSchema);