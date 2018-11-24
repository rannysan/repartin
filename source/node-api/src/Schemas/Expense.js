const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    name: String,
    value: Float64Array,
    useId: Number,
    assignedUserID: Number,
    payments: Array,
    dueDate: Date,
    repeatingExpenseID: Number,
    houseID: Number,
    removed: Boolean
});

module.exports = mongoose.model('expenses', expenseSchema);