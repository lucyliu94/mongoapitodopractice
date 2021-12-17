const {Schema, model} = require("../db/connection")

const TodoSchema = new Schema({
    reminder: String,
    completed: Boolean
})

const Todo = model("Todo", TodoSchema)

module.exports = Todo