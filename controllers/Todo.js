//Get Todos function send Todos or error
const getTodos = (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  };

  const Todo = require("../model/Todo");

//Create Todo function create todo and save it or send error
  const createTodo = (req, res) => {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    });
  
    todo.save((err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    });
  };

//Update exist Todo or send error
  const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
      { _id: req.params.todoID },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed,
        },
      },
      { new: true },
      (err, Todo) => {
        if (err) {
          res.send(err);
        } else res.json(Todo);
      }
    );
  };

//Delete Todo and send confirmation or send error
  const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
      .then(() => res.json({ message: "Todo Deleted Successfully" }))
      .catch((err) => res.send(err));
  };

  //Export functions
  module.exports = {
    getTodos, createTodo, updateTodo, deleteTodo,
  };