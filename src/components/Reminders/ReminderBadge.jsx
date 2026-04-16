// components/Reminders/ReminderBadge.jsx
import React from "react";
import { useReminders } from "../../hooks/useReminders";
import "./reminders.css";

export default function ReminderBadge() {
  const { reminders } = useReminders();

  const overdue = reminders.filter((r) => {
    const now = new Date();
    return new Date(r.trigger_time) < now;
  });

  const count = reminders.length;

  return (
    <div className={`reminder-badge ${overdue.length > 0 ? "overdue" : ""}`}>
      🔔 {count}
    </div>
  );
}
