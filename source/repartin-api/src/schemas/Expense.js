const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    name: String,
    value: mongoose.Schema.Types.Decimal128,
    useId: String,
    assignedUserID: String,
    payments: Array,
    dueDate: Date,
    repeatingExpenseID: String,
    houseID: String,
    removed: Boolean
});

module.exports = mongoose.model('expenses', expenseSchema);