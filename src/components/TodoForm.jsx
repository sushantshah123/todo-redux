// TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      image,
    };

    dispatch(addTodo(newTodo));

    // Clear form fields
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
