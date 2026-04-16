// pages/CalendarPage.jsx
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import CalendarView from "../components/Calendar/CalendarView";
import "./pages.css";

export default function CalendarPage() {
  const { tasks } = useTaskContext();

  const taskEvents = tasks
    .filter(t => t.dueDate)
    .map(t => ({
      id: `task-${t.id}`,
      title: t.title,
      start_time: new Date(t.dueDate),
      isTask: true
    }));

  return (
    <div className="page calendar-page">
      <h1>Calendar</h1>
      <CalendarView taskEvents={taskEvents} />
    </div>
  );
}
