import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleCompletion }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleCompletion(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
