'use client';

import React, { useState } from 'react';

export default function FilterableTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Review Hooks' },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <h2>Filterable Todo List</h2>

      {/* 🔍 Search Input */}
      <input
        style={inputStyle}
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* ➕ Add Todo */}
      <input
        style={inputStyle}
        type="text"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleAddTodo}>
        Add Todo
      </button>

      {/* 📝 Render Filtered List or Message */}
      {filteredTodos.length > 0 ? (
        <ul style={{ padding: 0, listStyleType: 'none' }}>
          {filteredTodos.map((todo) => (
            <li key={todo.id} style={listItemStyle}>
              {todo.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos match your search.</p>
      )}
    </div>
  );
}
