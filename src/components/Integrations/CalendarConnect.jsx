// components/Integrations/CalendarConnect.jsx
import React, { useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import "./integrations.css";

export default function CalendarConnect() {
  const { syncCalendar, loading } = useCalendar();
  const [connected, setConnected] = useState(false);

  const connectCalendar = () => {
    setConnected(true);
  };

  return (
    <div className="integration-card">
      <h2>Calendar Integration</h2>

      {!connected ? (
        <button className="connect-btn" onClick={connectCalendar}>
          Connect Calendar
        </button>
      ) : (
        <p className="connected-text">Calendar Connected ✔</p>
      )}

      <button
        className="sync-btn"
        onClick={syncCalendar}
        disabled={loading || !connected}
      >
        Sync Calendar Events
      </button>
    </div>
  );
}
