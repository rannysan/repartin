const mongoose = require('mongoose')

// Create task schema 
const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    useId: String,
    assignedUserID: { type: Array, "default": [] },
    dueDate: Date,
    executionDate: Date,
    houseID:  String,
    removed: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);