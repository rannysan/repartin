const mongoose = require('mongoose')

// Create task schema 
const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    useId: mongoose.Types.ObjectId,
    assignedUserID: mongoose.Types.ObjectId,
    dueDate: Date,
    executionDate: Date,
    houseID: mongoose.Types.ObjectId,
    removed: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);