//Import modules
const router = require("express").Router();

const { getTodos, createTodo, updateTodo, deleteTodo, } = require("./controllers/Todo");


router.get("/", (req, res) => {
  res.send("Project3 crudAPI");
});

//Get route
router.get("/todos", getTodos);

//Post route
router.post("/todos", createTodo);

//Put route
router.put("/todos/:todoID", updateTodo);

//Delete route
router.delete("/todos/:todoID", deleteTodo);

//Router export
module.exports = router;