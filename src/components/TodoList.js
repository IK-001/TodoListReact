import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos,setTodos, deleteTodo, toggleCompletion,setSelectedTodoId,selectedTodoId }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
          selectedTodoId={selectedTodoId}
          setSelectedTodoId={setSelectedTodoId}
        />
      ))}
    </ul>
  );
};

export default TodoList;
