import React, { useState, useEffect, useCallback } from 'react';

const TodoItem = ({ task, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  // Sync editedText when external task.text changes
  useEffect(() => {
    setEditedText(task.text);
  }, [task.text]);

  // Log on mount and cleanup on unmount
  useEffect(() => {
    console.log('Todo mounted:', task.id);

    return () => {
      console.log('Todo unmounted:', task.id);
    };
  }, [task.id]);

  const handleToggle = useCallback(() => {
    onToggle(task.id);
  }, [onToggle, task.id]);

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleChange = useCallback((e) => {
    setEditedText(e.target.value);
  }, []);

  const saveEdit = useCallback(() => {
    const trimmed = editedText.trim();
    if (trimmed) {
      onEdit(task.id, trimmed);
    }
    setIsEditing(false);
  }, [editedText, onEdit, task.id]);

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
          />
          <span className={task.completed ? 'completed' : ''}>
            {task.text}
          </span>
          <button onClick={startEditing}>Edit</button>
        </>
      )}
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
export default TodoItem;
