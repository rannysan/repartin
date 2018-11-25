const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    name: String,
    value: mongoose.Schema.Types.Decimal128,
    useId: mongoose.Types.ObjectId,
    assignedUserID: String,
    payments: Array,
    dueDate: Date,
    repeatingExpenseID: mongoose.Types.ObjectId,
    houseID: mongoose.Types.ObjectId,
    removed: Boolean
});

module.exports = mongoose.model('expenses', expenseSchema);