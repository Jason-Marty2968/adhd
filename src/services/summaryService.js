// services/summaryService.js
import api from "./api";

export const summaryService = {
  getDailySummary: () => api.get("/summary/daily"),

  getWeeklySummary: () => api.get("/summary/weekly"),

  getSummaryHistory: () => api.get("/summary/history")
};
