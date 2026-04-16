// components/Summaries/WeeklySummary.jsx
import React from "react";
import { useSummary } from "../../hooks/useSummary";
import "./summaries.css";

export default function WeeklySummary() {
  const { weekly, loading } = useSummary();

  if (loading) return <p>Loading weekly summary...</p>;
  if (!weekly) return <p>No weekly summary available.</p>;

  return (
    <div className="weekly-summary">
      <h2>This Week's Summary</h2>

      {weekly.text && <p className="summary-text">{weekly.text}</p>}

      {weekly.items && (
        <ul className="summary-list">
          {weekly.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
