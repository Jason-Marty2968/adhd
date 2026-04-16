// components/Tasks/TaskList.jsx
import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";
import "./tasks.css";

export default function TaskList() {
  const { tasks, loading } = useTaskContext();

  if (loading) return <p>Loading tasks...</p>;
  if (!tasks.length) return <p>No tasks yet. Add one!</p>;

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
