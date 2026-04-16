// components/Reminders/ReminderSettings.jsx
import React, { useState } from "react";
import { useReminders } from "../../hooks/useReminders";
import "./reminders.css";

export default function ReminderSettings() {
  const {
    reminders,
    loading,
    createReminder,
    updateReminder,
    deleteReminder,
    acknowledge
  } = useReminders();

  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!text.trim() || !time) return;

    await createReminder({
      text,
      trigger_time: time,
      type: "deadline"
    });

    setText("");
    setTime("");
  };

  if (loading) return <p>Loading reminders...</p>;

  return (
    <div className="reminder-settings">
      <h2>Reminder Settings</h2>

      <form className="reminder-form" onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Reminder text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="submit">Add Reminder</button>
      </form>

      <div className="reminder-list">
        {reminders.map((rem) => (
          <div key={rem.id} className="reminder-item">
            <div>
              <strong>{rem.text}</strong>
              <p>{new Date(rem.trigger_time).toLocaleString()}</p>
            </div>

            <div className="reminder-actions">
              <button onClick={() => acknowledge(rem.id)}>Acknowledge</button>
              <button onClick={() => deleteReminder(rem.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
