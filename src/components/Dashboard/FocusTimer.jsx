// components/Dashboard/FocusTimer.jsx
import React, { useState, useEffect } from "react";
import "./dashboard.css";

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((s) => Math.max(s - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setSeconds(25 * 60);
    setRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="focus-timer">
      <h3>Focus Timer</h3>
      <div className="timer-display">
        {minutes}:{secs.toString().padStart(2, "0")}
      </div>

      <div className="timer-controls">
        <button onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
