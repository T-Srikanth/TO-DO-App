import React, { useState, useEffect } from 'react';
import axios from 'axios';

const port = 5001;
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:${port}/todos`)
      .then(response => setTodos(response.data))
      .catch(error => console.log(error));
  }, []);

  const addTodo = () => {
    axios.post(`http://localhost:${port}/todos/add`, { text: newTodo })
      .then(() => {
        setNewTodo('');
        // Refresh the todo list
        axios.get(`http://localhost:${port}/todos`)
          .then(response => setTodos(response.data))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };
  const deleteTodo = (id) => {
    console.log(`Deleting todo with id ${id}`);
    axios.delete(`http://localhost:${port}/todos/delete/${id}`)
      .then((response) => {
        console.log(`Todo deleted successfully: ${response.data}`);
        // Refresh the todo list
        axios.get(`http://localhost:${port}/todos`)
          .then((response) => setTodos(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(`Error deleting todo: ${error}`));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}<button onClick={() => deleteTodo(todo._id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;