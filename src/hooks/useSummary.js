// hooks/useSummary.js
import { useState, useEffect } from "react";
import { summaryService } from "../services/summaryService";

export function useSummary() {
  const [daily, setDaily] = useState(null);
  const [weekly, setWeekly] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadSummaries = async () => {
    setLoading(true);
    const dailyRes = await summaryService.getDailySummary();
    const weeklyRes = await summaryService.getWeeklySummary();
    setDaily(dailyRes.data);
    setWeekly(weeklyRes.data);
    setLoading(false);
  };

  useEffect(() => {
    loadSummaries();
  }, []);

  return {
    daily,
    weekly,
    loading,
    reload: loadSummaries
  };
}
