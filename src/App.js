import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodoId,setSelectedTodoId] = useState(null)
 
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

 
  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos}
                setTodos={setTodos}
                deleteTodo={deleteTodo} 
                toggleCompletion={toggleCompletion} 
                selectedTodoId={selectedTodoId}
                setSelectedTodoId={setSelectedTodoId}
                />
    </div>
  );
};

export default App;
