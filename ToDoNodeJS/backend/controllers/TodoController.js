
const { insert, findAll } = require('../models/todo')

exports.createTodo = (req, res) => {
    const todo = req.body
    const inserted = insert(todo)
  res.json(inserted)
}


exports.updateTodo = (req, res) => {
    res.json("a")
}
exports.getTodoList = (req, res) => {
    const list = findAll()
    console.log(req.body)
    res.json(list)
}
exports.deleteTodo = () => {}
exports.clearCompleted = () => {}
