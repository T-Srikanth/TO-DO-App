import express from 'express';
import Todo from '../models/todo.model.js';
const router = express.Router();

router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const text = req.body.text;
  const newTodo = new Todo({text});

  newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



export default router;