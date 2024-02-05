// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id, updatedFields) => {
    dispatch(updateTodo({ id, ...updatedFields }));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <img src={todo.image} alt={todo.title} style={{ maxWidth: '100px' }} />
          </div>
          <div>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleUpdateTodo(todo.id, { title: 'Updated Title' })}>Update Title</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
