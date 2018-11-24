const mongoose = require('mongoose')

// Create task schema 
const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    useId: Number,
    assignedUserID: Number,
    dueDate: Date,
    executionDate: Date,
    houseID: Number,
    removed: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);