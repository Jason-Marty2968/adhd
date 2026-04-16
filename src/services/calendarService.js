// services/calendarService.js
import api from "./api";

export const calendarService = {
  getEvents: () => api.get("/calendar/events"),

  syncCalendar: () => api.post("/calendar/sync"),

  getFreeBlocks: () => api.get("/calendar/free-blocks")
};
