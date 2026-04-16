// hooks/useReminders.js
import { useState, useEffect } from "react";
import { reminderService } from "../services/reminderService";

export function useReminders() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadReminders = async () => {
    setLoading(true);
    const res = await reminderService.getReminders();
    setReminders(res.data);
    setLoading(false);
  };

  const createReminder = async (data) => {
    await reminderService.createReminder(data);
    await loadReminders();
  };

  const updateReminder = async (id, data) => {
    await reminderService.updateReminder(id, data);
    await loadReminders();
  };

  const deleteReminder = async (id) => {
    await reminderService.deleteReminder(id);
    await loadReminders();
  };

  const acknowledge = async (id) => {
    await reminderService.acknowledgeReminder(id);
    await loadReminders();
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return {
    reminders,
    loading,
    createReminder,
    updateReminder,
    deleteReminder,
    acknowledge,
    reload: loadReminders
  };
}
