// In your parent component (e.g., TodoList.jsx)
import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React', completed: false },
    { id: '2', text: 'Build a project', completed: false },
  ]);

  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          task={todo}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
