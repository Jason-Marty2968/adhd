// components/Tasks/TaskItem.jsx
import React, { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import SubtaskList from "./SubtaskList";
import TaskEditor from "./TaskEditor";
import "./tasks.css";

export default function TaskItem({ task }) {
  const { deleteTask } = useTaskContext();
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <div className="task-item">
      <div className="task-header">
        <div>
          <strong>{task.title}</strong>
          {task.dueDate && (
            <p className="task-date">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="task-actions">
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Hide" : "Details"}
          </button>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>

      {expanded && <SubtaskList task={task} />}

      {editing && (
        <TaskEditor task={task} onClose={() => setEditing(false)} />
      )}
    </div>
  );
}
