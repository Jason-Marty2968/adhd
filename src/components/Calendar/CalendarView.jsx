// components/Calendar/CalendarView.jsx
import React from "react";
import { useCalendar } from "../../hooks/useCalendar";
import EventCard from "./EventCard";
import "./calendar.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarView({ taskEvents = [] }) {
  const { events, freeBlocks, loading, syncCalendar } = useCalendar();

  // ⭐ Allow task events to render even if external calendar is loading
  if (loading && taskEvents.length === 0) {
    return <p>Loading calendar...</p>;
  }

  // ⭐ Merge external calendar events + task events
  const allEvents = [
    ...(events || []),
    ...taskEvents
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Your Weekly Schedule</h2>
        <button onClick={syncCalendar} className="sync-btn">
          Sync Calendar
        </button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-column">
            <h3>{day}</h3>

            {allEvents
              .filter((e) => new Date(e.start_time).getDay() === days.indexOf(day))
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}

            {(freeBlocks || [])
              .filter((b) => b.day === day)
              .map((block, i) => (
                <div key={i} className="free-block">
                  Free: {block.start}–{block.end}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
