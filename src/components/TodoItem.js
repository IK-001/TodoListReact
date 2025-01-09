import React, { useState } from 'react';


const TodoItem = ({ todo,todos, setTodos,deleteTodo, toggleCompletion,selectedTodoId,setSelectedTodoId }) => {
 
  const [updatetedTodo,setUpdatedTodo] = useState(null)

  const updateTodo = (todoId) => {
    setSelectedTodoId(todoId)
    setUpdatedTodo(todo)
  }

  const onChangeHandler = (e) => {
    setUpdatedTodo((prev) => ({
      ...prev,
      task: e.target.value,
    })
  )
}

  const onSubmitUpdate = (e) => { 
    e.preventDefault()
    if (selectedTodoId) {
      setTodos(todos.map((t) =>
        t.id === selectedTodoId ? { ...t, ...updatetedTodo } : t
      ));
      setSelectedTodoId(null)
    } else {
      return null;
    }

  }

  return (
    <li >

      {selectedTodoId ?  
      
      <input
        type='text'
        onChange={onChangeHandler}
        value={updatetedTodo.task}
        placeholder='update Todo'
      />

      :
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleCompletion(todo.id)}
      >
          {todo.task}
      </span>
}

  {!selectedTodoId ?
      <div>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={() => updateTodo(todo.id)}>Update</button>
      </div> :
      <form onSubmit={onSubmitUpdate}>
        <button type='submit' >Save</button>
        <button type='button' onClick={() => setSelectedTodoId(null)}>Cancel</button>
      </form>
      }
    </li>
  );
};

export default TodoItem;
