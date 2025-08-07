'use client';

import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(), 
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    padding: '10px',
    width: 'calc(100% - 22px)',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const listItemStyle = {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  };

  return (
    <div style={containerStyle}>
      <h2>Todo List</h2>

      <input
        style={inputStyle}
        type="text"
        value={inputValue}
        placeholder="Add a new task..."
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button style={buttonStyle} onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={listItemStyle}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
