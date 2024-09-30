import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const todoSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Todo = model('Todo', todoSchema);

export default Todo;