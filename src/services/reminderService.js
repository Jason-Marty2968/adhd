// services/reminderService.js
import api from "./api";

export const reminderService = {
  getReminders: () => api.get("/reminders"),

  createReminder: (data) => api.post("/reminders", data),

  updateReminder: (id, data) => api.put(`/reminders/${id}`, data),

  deleteReminder: (id) => api.delete(`/reminders/${id}`),

  acknowledgeReminder: (id) =>
    api.post(`/reminders/${id}/acknowledge`)
};
