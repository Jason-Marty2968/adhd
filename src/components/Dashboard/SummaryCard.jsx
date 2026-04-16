// components/Dashboard/SummaryCard.jsx
import React from "react";
import "./dashboard.css";

export default function SummaryCard({ title, data }) {
  if (!data) return null;

  return (
    <div className="summary-card">
      <h4>{title}</h4>

      {data.text && <p>{data.text}</p>}

      {data.items && (
        <ul>
          {data.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
