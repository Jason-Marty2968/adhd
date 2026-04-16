// services/graphService.js
import api from "./api";

export const graphService = {
  startLogin: () => api.get("/graph/login"),

  finishLogin: (code) =>
    api.post("/graph/login/callback", { code }),

  getEmails: () => api.get("/graph/emails"),

  getFlaggedEmails: () => api.get("/graph/emails/flagged"),

  syncAssignmentsFromEmail: () =>
    api.post("/graph/sync-assignments")
};
