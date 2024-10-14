const express = require("express")
const app = express()

app.use(express.json())

const server = app.listen(8080, function() {
    let port = server.address().port
    console.log("Server running on port", port)
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})

let todos = [
    {"label": "Drink some water", "done": false},
    {"label": "Do my homework", "done": false}
]

app.get('/todos', (req, res) => {
    res.status(200).json(todos)
})

app.post('/todos', (req, res) => {
    let todo = req.body
    todos.push(todo)
    res.status(200).json(todos)
})

app.delete('/todos/:todoPosition', (req, res) => {
    let todoPosition = req.params.todoPosition;
    todos = todos.filter((value, position) => position !== todoPosition)
    res.status(200).json(todos);
  })