// components/Integrations/MicrosoftGraphConnect.jsx
import React, { useState } from "react";
import { useGraphAPI } from "../../hooks/useGraphAPI";
import "./integrations.css";

export default function MicrosoftGraphConnect() {
  const {
    emails,
    flagged,
    loading,
    loadEmails,
    loadFlagged,
    syncAssignments
  } = useGraphAPI();

  const [connected, setConnected] = useState(false);

  const startLogin = () => {
    window.location.href = "http://localhost:8000/api/graph/login";
  };

  return (
    <div className="integration-card">
      <h2>Microsoft Graph Integration</h2>

      {!connected ? (
        <button className="connect-btn" onClick={startLogin}>
          Connect Microsoft Account
        </button>
      ) : (
        <p className="connected-text">Connected ✔</p>
      )}

      <div className="integration-actions">
        <button onClick={loadEmails} disabled={loading}>
          Load Emails
        </button>

        <button onClick={loadFlagged} disabled={loading}>
          Load Flagged Emails
        </button>

        <button onClick={syncAssignments} disabled={loading}>
          Sync Assignments from Email
        </button>
      </div>

      {emails.length > 0 && (
        <div className="integration-section">
          <h3>Emails</h3>
          <ul>
            {emails.map((e, i) => (
              <li key={i}>{e.subject}</li>
            ))}
          </ul>
        </div>
      )}

      {flagged.length > 0 && (
        <div className="integration-section">
          <h3>Flagged Emails</h3>
          <ul>
            {flagged.map((e, i) => (
              <li key={i}>{e.subject}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
