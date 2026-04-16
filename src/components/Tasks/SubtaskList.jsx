// components/Tasks/SubtaskList.jsx
import React from "react";
import { taskService } from "../../services/taskService";
import "./tasks.css";

export default function SubtaskList({ task }) {
  const toggleSubtask = async (sub) => {
    await taskService.updateSubtask(task.id, sub.id, {
      completed: !sub.completed
    });
  };

  if (!task.subtasks || !task.subtasks.length)
    return <p className="no-subtasks">No subtasks yet.</p>;

  return (
    <div className="subtask-list">
      <h4>Subtasks</h4>

      <ul>
        {task.subtasks.map((sub) => (
          <li key={sub.id} className={sub.completed ? "done" : ""}>
            <label>
              <input
                type="checkbox"
                checked={sub.completed}
                onChange={() => toggleSubtask(sub)}
              />
              {sub.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
