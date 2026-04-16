// hooks/useGraphAPI.js
import { useState } from "react";
import { graphService } from "../services/graphService";

export function useGraphAPI() {
  const [emails, setEmails] = useState([]);
  const [flagged, setFlagged] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadEmails = async () => {
    setLoading(true);
    const res = await graphService.getEmails();
    setEmails(res.data);
    setLoading(false);
  };

  const loadFlagged = async () => {
    setLoading(true);
    const res = await graphService.getFlaggedEmails();
    setFlagged(res.data);
    setLoading(false);
  };

  const syncAssignments = async () => {
    setLoading(true);
    await graphService.syncAssignmentsFromEmail();
    setLoading(false);
  };

  return {
    emails,
    flagged,
    loading,
    loadEmails,
    loadFlagged,
    syncAssignments
  };
}
