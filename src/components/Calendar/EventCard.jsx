// components/Calendar/EventCard.jsx
import React from "react";
import "./calendar.css";

export default function EventCard({ event }) {
  const start = new Date(event.start_time).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });

  // ⭐ If no end_time exists (task event), default to start time
  const end = event.end_time
    ? new Date(event.end_time).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      })
    : start;

  return (
    <div className="event-card">
      <h4>{event.title}</h4>
      <p className="event-time">
        {start} – {end}
      </p>

      {/* ⭐ Only show provider for real calendar events */}
      {event.provider && (
        <p className="event-provider">{event.provider}</p>
      )}
    </div>
  );
}
