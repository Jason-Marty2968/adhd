// pages/TasksPage.jsx
import React from "react";
import TaskList from "../components/Tasks/TaskList";
import QuickAddTask from "../components/Dashboard/QuickAddTask";
import "./pages.css";

export default function TasksPage() {
  return (
    <div className="page tasks-page">
      <h1>Your Tasks</h1>
      <QuickAddTask />
      <TaskList />
    </div>
  );
}
