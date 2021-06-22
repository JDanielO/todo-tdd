const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
})

const ToDoModel = mongoose.model("Todo", ToDoSchema);

module.exports = ToDoModel;