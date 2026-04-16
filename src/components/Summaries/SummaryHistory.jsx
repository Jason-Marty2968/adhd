// components/Summaries/SummaryHistory.jsx
import React, { useEffect, useState } from "react";
import { summaryService } from "../../services/summaryService";
import "./summaries.css";

export default function SummaryHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHistory = async () => {
    setLoading(true);
    const res = await summaryService.getSummaryHistory();
    setHistory(res.data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  if (loading) return <p>Loading summary history...</p>;
  if (!history.length) return <p>No past summaries yet.</p>;

  return (
    <div className="summary-history">
      <h2>Summary History</h2>
      <ul>
        {history.map((entry) => (
          <li key={entry.id} className="summary-history-item">
            <div>
              <strong>{entry.date}</strong>
              {entry.type && <span className="summary-type"> ({entry.type})</span>}
            </div>
            {entry.text && <p>{entry.text}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
