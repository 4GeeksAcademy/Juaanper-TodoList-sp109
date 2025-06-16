import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed === '') return;
    setTodos([...todos, trimmed]);
    setInput('');
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const styles = {
    appContainer: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    todoBox: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    },
    title: {
      fontSize: '4.5rem',
      fontWeight: 100,
      color: '#fbcfe8',
      textAlign: 'center',
      paddingTop: '2.5rem',
      userSelect: 'none',
      margin: 0,
      fontFamily: 'system-ui, sans-serif',
    },
    todoInput: {
      width: '100%',
      padding: '1rem',
      fontSize: '1.25rem',
      border: 'none',
      outline: 'none',
      color: '#111827',
      boxSizing: 'border-box',
    },
    todoList: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    todoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 1rem',
      fontSize: '1.125rem',
      borderTop: '1px solid #e5e7eb',
      cursor: 'default',
      transition: 'background-color 0.2s ease',
    },
    todoItemHover: {
      backgroundColor: '#f9fafb',
    },
    todoText: {
      marginRight: '1rem',
      flexGrow: 1,
    },
    todoDelete: {
      color: '#9ca3af',
      fontSize: '1.5rem',
      fontWeight: 300,
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'color 0.2s ease',
    },
    todoFooter: {
      fontSize: '0.875rem',
      color: '#9ca3af',
      padding: '0.75rem 1rem',
      borderTop: '1px solid #e5e7eb',
    },
  };


  return (
    <div style={styles.appContainer}>
      <div style={styles.todoBox}>
        <h1 style={styles.title}>todos</h1>

        <form onSubmit={handleAddTodo}>
          <input
            style={styles.todoInput}
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>

        <ul style={styles.todoList}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={styles.todoItem}

            >
              <span style={styles.todoText}>{todo}</span>
              <span
                onClick={() => handleDelete(index)}
                style={styles.todoDelete}
                role="button"
                aria-label={`Delete ${todo}`}
                onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
              >
                ×
              </span>
            </li>
          ))}
        </ul>

        <div style={styles.todoFooter}>
          {todos.length} item{todos.length !== 1 ? 's' : ''} left
        </div>
      </div>
    </div>
  );
}
