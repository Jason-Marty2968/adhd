// hooks/useCalendar.js
import { useState, useEffect } from "react";
import { calendarService } from "../services/calendarService";

export function useCalendar() {
  const [events, setEvents] = useState([]);
  const [freeBlocks, setFreeBlocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCalendar = async () => {
    setLoading(true);
    const eventRes = await calendarService.getEvents();
    const freeRes = await calendarService.getFreeBlocks();
    setEvents(eventRes.data);
    setFreeBlocks(freeRes.data);
    setLoading(false);
  };

  const syncCalendar = async () => {
    await calendarService.syncCalendar();
    await loadCalendar();
  };

  useEffect(() => {
    loadCalendar();
  }, []);

  return {
    events,
    freeBlocks,
    loading,
    reload: loadCalendar,
    syncCalendar
  };
}
