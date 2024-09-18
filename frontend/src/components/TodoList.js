import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TodoList.module.css';

const port = 5001;
const hostname = window.location.hostname;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get(`http://${hostname}:${port}/todos`)
      .then(response => setTodos(response.data))
      .catch(error => console.log(error));
  }, []);

  const addTodo = () => {
    axios.post(`http://${hostname}:${port}/todos/add`, { text: newTodo })
      .then(() => {
        setNewTodo('');
        // Refresh the todo list
        axios.get(`http://${hostname}:${port}/todos`)
          .then(response => setTodos(response.data))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };
  const deleteTodo = (id) => {
    console.log(`Deleting todo with id ${id}`);
    axios.delete(`http://${hostname}:${port}/todos/delete/${id}`)
      .then((response) => {
        console.log(`Todo deleted successfully: ${response.data}`);
        // Refresh the todo list
        axios.get(`http://${hostname}:${port}/todos`)
          .then((response) => setTodos(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(`Error deleting todo: ${error}`));
  };

  return (
    <div className={styles.todoList}>
      <h1>To-Do List</h1>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className={styles.todoItem}>{todo.text}<button onClick={() => deleteTodo(todo._id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;