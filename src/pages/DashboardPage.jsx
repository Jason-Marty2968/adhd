// pages/DashboardPage.jsx
import React from "react";
import DashboardSummary from "../components/Dashboard/DashboardSummary";
import QuickAddTask from "../components/Dashboard/QuickAddTask";
import FocusTimer from "../components/Dashboard/FocusTimer";
import ReminderBadge from "../components/Reminders/ReminderBadge";
import { useTaskContext } from "../context/TaskContext";
import "./pages.css";

export default function DashboardPage() {
  const { tasks, loading } = useTaskContext();

  return (
    <div className="page dashboard-page">
      <div className="dashboard-top">
        <h1>Dashboard</h1>
      </div>

      <QuickAddTask />

      {/* ⭐ Task Preview Section */}
      <div className="dashboard-tasks-preview">
        <h2>Today's Tasks</h2>

        {loading && <p>Loading tasks...</p>}

        {!loading && tasks.length === 0 && (
          <p>No tasks yet. Add one above.</p>
        )}

        {!loading && tasks.length > 0 && (
          <ul>
            {tasks.map((t) => (
              <li key={t.id}>{t.title}</li>
            ))}
          </ul>
        )}
      </div>

      <DashboardSummary />
      <FocusTimer />
    </div>
  );
}
