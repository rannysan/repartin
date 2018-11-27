const mongoose = require('mongoose')

// Create task schema 
const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    useId: { type: Array, "default": [] },
    assignedUserID: String,
    dueDate: Date,
    executionDate: Date,
    houseID:  String,
    removed: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);