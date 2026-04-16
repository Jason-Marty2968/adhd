// components/Tasks/TaskEditor.jsx
import React, { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import "./tasks.css";

export default function TaskEditor({ task, onClose }) {
  const { updateTask } = useTaskContext();

  const [title, setTitle] = useState(task.title);
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  const handleSave = async (e) => {
    e.preventDefault();
    await updateTask(task.id, { title, dueDate });
    onClose();
  };

  return (
    <div className="task-editor">
      <h3>Edit Task</h3>

      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="editor-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
