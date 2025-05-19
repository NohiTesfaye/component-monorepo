import React, { useState, useMemo } from 'react';
// import { Input, Button, List, ListItem } from '@group-scope/ui-components'; // Hypothetical UI components
// import { generateUniqueId } from '@group-scope/utils'; // Hypothetical utils

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [editingId, setEditingId] = useState(null); // State for tracking the item being edited
  const [editText, setEditText] = useState(''); // State for the text being edited
  const [filter, setFilter] = useState('all'); // State for filtering: 'all', 'active', 'completed'

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: Date.now(), // Using a simple timestamp for now, could use a utils function
      text: newTodoText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleSaveTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editText } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    const allTodos = todos; // Reference the todos state
    switch (filter) {
      case 'active':
        return allTodos.filter(todo => !todo.completed);
      case 'completed':
        return allTodos.filter(todo => todo.completed);
      default:
        return allTodos;
    }
  }, [todos, filter]); // Explicitly include todos in dependency array

  return (
    <div>
      <div>
        {/* Using basic HTML input and button instead of hypothetical UI components */}
        <input
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          placeholder="Add a new to-do"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div> {/* Filter buttons */}
        {/* Using basic HTML buttons instead of hypothetical UI components */}
        <button onClick={() => handleFilterChange('all')} disabled={filter === 'all'}>All</button>
        <button onClick={() => handleFilterChange('active')} disabled={filter === 'active'}>Active</button>
        <button onClick={() => handleFilterChange('completed')} disabled={filter === 'completed'}>Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>

      <ul> {/* Using basic HTML ul and li instead of hypothetical UI components */}
        {filteredTodos.map(todo => (
          <li key={todo.id}> {/* Using basic HTML li */} 
            {editingId === todo.id ? (
              // Edit mode
              <>
                {/* Using basic HTML input and button instead of hypothetical UI components */}
                <input type="text" value={editText} onChange={handleEditInputChange} />
                <button onClick={() => handleSaveTodo(todo.id)}>Save</button>
              </>
            ) : (
              // Display mode
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                {/* Using basic HTML buttons instead of hypothetical UI components */}
                <button onClick={() => handleEditClick(todo)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList; 